import React from 'react';
import HeroSection from './sections/HeroSection';
import CaseShowcaseSection from './sections/CaseShowcaseSection';
import StatisticsSection from './sections/StatisticsSection';
import FeaturedStoriesSection from './sections/FeaturedStoriesSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <CaseShowcaseSection />
      <StatisticsSection />
      <FeaturedStoriesSection />
    </div>
  );
}

export default App;
