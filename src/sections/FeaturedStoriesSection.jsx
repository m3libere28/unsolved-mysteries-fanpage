import React, { useState } from 'react';
import { cases } from '../data/cases';
import CaseModal from '../components/CaseModal';
import './FeaturedStoriesSection.css';

const FeaturedStoriesSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  
  // Select a few interesting cases for the featured section
  const featuredCases = cases
    .filter(c => c.details && c.details.length > 200 && c.imageUrl)
    .slice(0, 3);

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
  };

  return (
    <section className="featured" id="featured">
      <div className="featured__header">
        <h2>FEATURED STORIES</h2>
        <div className="featured__line"></div>
        <p>Deep dives into history's most perplexing cases</p>
      </div>

      <div className="featured__grid">
        {featuredCases.map((caseItem) => (
          <div
            key={caseItem.id}
            className="featured__card"
            onClick={() => handleCaseClick(caseItem)}
          >
            <div 
              className="featured__image" 
              style={{ backgroundImage: `url(${caseItem.imageUrl})` }}
            >
              <div className="featured__overlay">
                <h3>{caseItem.title}</h3>
                <span className="featured__year">{caseItem.year}</span>
              </div>
            </div>

            <div className="featured__content">
              <div className="featured__meta">
                <span className="featured__location">{caseItem.location}</span>
                <span className="featured__status">{caseItem.status}</span>
              </div>
              <p className="featured__summary">{caseItem.summary}</p>
              <button className="featured__read-more">Read Full Story</button>
            </div>
          </div>
        ))}
      </div>

      <CaseModal 
        caseData={selectedCase} 
        onClose={() => setSelectedCase(null)} 
      />
    </section>
  );
};

export default FeaturedStoriesSection;
