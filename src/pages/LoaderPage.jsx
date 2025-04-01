import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoaderPage.css';

const LoaderPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      navigate('/home');
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [navigate]);

  return (
    <div className="loader-page">
      <div className="tv-static"></div>
      <div className="loader-content">
        <div className="title-wrapper">
          <h1 className="main-title">Unsolved</h1>
          <h1 className="main-title outline">Mysteries</h1>
        </div>
        <div className="tagline">
          <span className="typing-text">Join the investigation...</span>
        </div>
      </div>
      <div className="scanline"></div>
      <div className="noise"></div>
    </div>
  );
};

export default LoaderPage;
