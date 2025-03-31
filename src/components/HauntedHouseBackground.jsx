import React, { useEffect, useState } from 'react';

const HauntedHouseBackground = () => {
  const [isLightning, setIsLightning] = useState(false);

  useEffect(() => {
    const createLightningSequence = () => {
      // First flash
      setIsLightning(true);
      setTimeout(() => {
        setIsLightning(false);
        // Quick flicker
        setTimeout(() => {
          setIsLightning(true);
          setTimeout(() => {
            setIsLightning(false);
            // Main bright flash
            setTimeout(() => {
              setIsLightning(true);
              setTimeout(() => {
                setIsLightning(false);
                // Final flickers
                setTimeout(() => {
                  setIsLightning(true);
                  setTimeout(() => setIsLightning(false), 50);
                }, 50);
              }, 120);
            }, 40);
          }, 30);
        }, 30);
      }, 80);
    };

    const lightningInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        createLightningSequence();
      }
    }, 2000);

    return () => clearInterval(lightningInterval);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }}>
      <img 
        src="/assets/haunted house.png"
        alt="Haunted House"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none' }}>
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: '-10px',
              width: '4px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '50%',
              animation: `fall${i} 7s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.5)'
            }}
          />
        ))}
      </div>
      {isLightning && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          zIndex: 3,
          pointerEvents: 'none',
          animation: 'flash 50ms ease-in'
        }} />
      )}
      <style>
        {[...Array(50)].map((_, i) => `
          @keyframes fall${i} {
            from {
              transform: translateY(-10px);
              opacity: 0;
            }
            5% {
              opacity: 0.7;
            }
            95% {
              opacity: 0.7;
            }
            to {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `).join('\n')}
        {`
          @keyframes flash {
            0% { opacity: 0; }
            10% { opacity: 1; }
            40% { opacity: 0.8; }
            60% { opacity: 1; }
            80% { opacity: 0.6; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default HauntedHouseBackground;
