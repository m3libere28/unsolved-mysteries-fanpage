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
    // Show cow when UFO is in position (3s for UFO animation)
    const cowTimer = setTimeout(() => setCowVisible(true), 3000);
    
    // Start abduction after cow appears
    const abductionTimer = setTimeout(() => setIsAbducting(true), 4500);
    
    // Hide cow (abducted)
    const cowAbductionTimer = setTimeout(() => setCowAbducted(true), 5500);
    
    // Start exit animation
    const exitTimer = setTimeout(() => setIsExiting(true), 5700);
    
    // Complete loading sequence
    const loadTimer = setTimeout(() => {
      if (onLoadComplete) onLoadComplete();
    }, 6500);

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

      <motion.div 
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Close Encounter</h2>
        <p>Loading...</p>
      </motion.div>
      
      <motion.div 
        className="ufo-container"
        initial={{ scale: 0.5, y: -200, x: -100 }}
        animate={isExiting ? {
          scale: 0.1,
          y: -500,
          x: 500,
          opacity: 0,
          transition: {
            duration: 0.8,
            ease: "easeIn"
          }
        } : { 
          scale: [0.5, 0.8, 1.2],
          y: [-200, -100, 50],
          x: [-100, 0, 0],
          transition: { 
            duration: 3,
            times: [0, 0.6, 1],
            ease: "easeInOut"
          }
        }}
      >
        <motion.img 
          src={ufoImage}
          alt="UFO"
          className="ufo-image"
          animate={{
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <AnimatePresence>
        {cowVisible && !cowAbducted && (
          <motion.div
            className="cow-container"
            initial={{ y: 200, opacity: 0 }}
            animate={isAbducting ? {
              y: -70,
              opacity: 1,
              transition: { 
                duration: 1,
                ease: "easeInOut"
              }
            } : {
              y: 0,
              opacity: 1,
              transition: { 
                duration: 0.5,
                ease: "backOut"
              }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 }
            }}
          >
            <motion.img
              src={cowImage}
              alt="Cow"
              className={`cow-image ${isAbducting ? 'cow-abducting' : ''}`}
              animate={isAbducting ? {
                scale: 0.6,
                opacity: [1, 1, 0],
                transition: { 
                  duration: 1,
                  times: [0, 0.8, 1],
                  ease: "easeInOut"
                }
              } : {
                scale: 1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="treeline">
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
      </div>
    </div>
  );
};

export default UFOLoader;
