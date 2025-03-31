import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import UFOLoader from '../components/UFOLoader';
import '../styles/LoaderPage.css';

const LoaderPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/home');
    }, 1500); // Match this with the exit animation duration
  };

  useEffect(() => {
    // Prevent scrolling during the loader
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      className="loader-page"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <UFOLoader onLoadComplete={handleLoadComplete} />
      {isTransitioning && (
        <motion.div
          className="transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
            zIndex: 1001
          }}
        />
      )}
    </motion.div>
  );
};

export default LoaderPage;
