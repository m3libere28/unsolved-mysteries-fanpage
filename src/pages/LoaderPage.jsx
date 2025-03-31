import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UFOLoader from '../components/UFOLoader';
import '../styles/LoaderPage.css';

const LoaderPage = () => {
  const navigate = useNavigate();

  const handleLoadComplete = () => {
    navigate('/home');
  };

  useEffect(() => {
    // Prevent scrolling during the loader
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="loader-page">
      <UFOLoader onLoadComplete={handleLoadComplete} />
    </div>
  );
};

export default LoaderPage;
