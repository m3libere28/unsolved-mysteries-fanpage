import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/HomePage.css';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        '--tx': `${(Math.random() - 0.5) * 200}px`,
        '--ty': `${(Math.random() - 0.5) * 200}px`,
        animationDelay: `${Math.random() * 20}s`
      }
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
        
        {/* Light beam effect */}
        <div className="hero__light-beam"></div>

        {/* Dust particles */}
        <div className="hero__particles">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="hero__particle"
              style={particle.style}
            />
          ))}
        </div>
        
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero__title">
            <span className="hero__title-main">Unsolved Mysteries</span>
            <span className="hero__title-sub">Fanpage</span>
          </h1>
          <p className="hero__description">
            Dive into the world's most intriguing unsolved cases. 
            Every mystery has a story. Every story needs an ending.
          </p>
          <div className="hero__buttons">
            <Link to="/cases" className="button">
              Explore Cases
            </Link>
            <Link to="/submit-theory" className="button button--outline">
              Submit Theory
            </Link>
          </div>
        </motion.div>

        <div className="hero__scroll">
          <span>Scroll to Discover</span>
          <motion.div 
            className="hero__scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
