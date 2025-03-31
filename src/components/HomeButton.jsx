import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeButton.css';

const HomeButton = () => {
  const navigate = useNavigate();

  const goHome = () => {
    // Navigate to home with bypassLoader state
    navigate('/', { 
      state: { bypassLoader: true }
    });
  };

  return (
    <button className="home-button" onClick={goHome}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z"/>
      </svg>
      Home
    </button>
  );
};

export default HomeButton;
