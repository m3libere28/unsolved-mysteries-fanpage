import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__text">
        <span className="logo__unsolved">UNSOLVED</span>
        <span className="logo__mysteries">MYSTERIES</span>
        <span className="logo__fanpage">FANPAGE</span>
      </div>
      <div className="logo__question-mark">?</div>
      <div className="logo__glitch-effect"></div>
    </div>
  );
};

export default Logo;
