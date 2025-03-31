import React from 'react';
import heroImage from '../images/bbc04f17-5f95-4dc7-b176-b0d2a6616d78.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__background">
        <img src={heroImage} alt="Detective investigating" />
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__content">
        <h1>UNSOLVED MYSTERIES</h1>
        <div className="hero__line"></div>
        <p>Every case has a story. Every story needs to be told.</p>
        <div className="hero__status">
          <span>STATUS: </span>
          <span className="hero__status--highlight">INVESTIGATION ONGOING</span>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll to Investigate</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </div>
  );
};

export default HeroSection;