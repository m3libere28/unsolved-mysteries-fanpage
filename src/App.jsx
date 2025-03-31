import React, { useState, useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import CaseShowcaseSection from './sections/CaseShowcaseSection';
import StatisticsSection from './sections/StatisticsSection';
import TimelineSection from './sections/TimelineSection';
import EvidenceBoardSection from './sections/EvidenceBoardSection';
import FeaturedStoriesSection from './sections/FeaturedStoriesSection';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <CaseShowcaseSection />
      <StatisticsSection />
      <TimelineSection />
      <EvidenceBoardSection />
      <FeaturedStoriesSection />
    </div>
  );
}

export default App;
