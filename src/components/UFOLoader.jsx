import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ufoImage from '../assets/images/uFO.png';
import cowImage from '../assets/images/cow.png';
import '../styles/UFOLoader.css';

const UFOLoader = ({ onLoadComplete }) => {
  const [cowVisible, setCowVisible] = useState(false);
  const [isAbducting, setIsAbducting] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [cowAbducted, setCowAbducted] = useState(false);

  useEffect(() => {
    // Show cow when UFO is in position (5s for UFO animation)
    const cowTimer = setTimeout(() => setCowVisible(true), 5000);
    
    // Start abduction after cow appears (2s delay)
    const abductionTimer = setTimeout(() => setIsAbducting(true), 7000);
    
    // Hide cow (abducted) (2s for abduction)
    const cowAbductionTimer = setTimeout(() => setCowAbducted(true), 9000);
    
    // Start exit animation (0.5s delay)
    const exitTimer = setTimeout(() => setIsExiting(true), 9500);
    
    // Complete loading sequence (2s for exit)
    const loadTimer = setTimeout(() => {
      if (onLoadComplete) onLoadComplete();
    }, 11500);

    return () => {
      clearTimeout(cowTimer);
      clearTimeout(abductionTimer);
      clearTimeout(cowAbductionTimer);
      clearTimeout(exitTimer);
      clearTimeout(loadTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className="ufo-loader">
      <div className="stars">
        {[...Array(150)].map((_, i) => (
          <div key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }} />
        ))}
      </div>

      <div className="ufo-container">
        <motion.div
          className="ufo"
          initial={{ y: -200, x: -100 }}
          animate={{ 
            y: isExiting ? -200 : 0,
            x: isExiting ? 100 : 0,
            rotate: isExiting ? 15 : 0
          }}
          transition={{
            y: { duration: 5, ease: "easeOut" },
            x: { duration: 5, ease: "easeOut" },
            rotate: { duration: 2, ease: "easeOut" }
          }}
        >
          <img src={ufoImage} alt="UFO" />
          <div className="beam" style={{ opacity: isAbducting ? 1 : 0 }} />
        </motion.div>

        <AnimatePresence>
          {cowVisible && !cowAbducted && (
            <motion.div
              className="cow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: isAbducting ? -100 : 0,
                rotate: isAbducting ? 180 : 0
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1 },
                scale: { duration: 1 },
                y: { duration: 2, ease: "easeOut" },
                rotate: { duration: 2, ease: "linear" }
              }}
            >
              <img src={cowImage} alt="Cow" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="ground" />
      
      <motion.div 
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2>Close Encounter</h2>
        <p>Loading...</p>
      </motion.div>
    </div>
  );
};

export default UFOLoader;
