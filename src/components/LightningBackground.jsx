import React, { useState, useEffect } from 'react';
import '../styles/LightningBackground.css';

const LightningBackground = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const triggerLightning = () => {
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 150);

      // Schedule next lightning
      const nextFlash = 3000 + Math.random() * 7000; // Between 3-10 seconds
      setTimeout(triggerLightning, nextFlash);
    };

    triggerLightning();
    return () => setIsFlashing(false);
  }, []);

  return (
    <div className="lightning-background">
      <div className={`dark-overlay ${isFlashing ? 'flash' : ''}`} />
      <img 
        src="/assets/zodiac killer.png" 
        alt="" 
        className="background-figure"
      />
    </div>
  );
};

export default LightningBackground;
