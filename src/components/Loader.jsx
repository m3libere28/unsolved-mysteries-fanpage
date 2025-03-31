import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__content">
        <div className="loader__question-mark">?</div>
        <div className="loader__text">
          <span>U</span>
          <span>N</span>
          <span>S</span>
          <span>O</span>
          <span>L</span>
          <span>V</span>
          <span>E</span>
          <span>D</span>
        </div>
        <div className="loader__progress">
          <div className="loader__bar"></div>
        </div>
        <div className="loader__glitch"></div>
      </div>
    </div>
  );
};

export default Loader;
