import React from 'react';
import '../styles/SpookyBackground.css';

const SpookyBackground = () => {
  return (
    <div className="spooky-background">
      <div className="fog-container">
        <div className="fog-img fog-img-first"></div>
        <div className="fog-img fog-img-second"></div>
      </div>
      <div className="noise-overlay"></div>
      <div className="vignette-overlay"></div>
    </div>
  );
};

export default SpookyBackground;
