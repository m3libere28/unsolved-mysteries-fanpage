import React, { useState } from 'react';
import { cases } from '../data/cases';
import './FeaturedStoriesSection.css';

const FeaturedStoriesSection = () => {
  const [activeCase, setActiveCase] = useState(null);
  
  // Select a few interesting cases for the featured section
  const featuredCases = cases
    .filter(c => c.details && c.details.length > 200 && c.imageUrl)
    .slice(0, 3);

  const handleCaseClick = (caseItem) => {
    setActiveCase(activeCase?.id === caseItem.id ? null : caseItem);
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
            className={`featured__card ${activeCase?.id === caseItem.id ? 'featured__card--active' : ''}`}
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

              {activeCase?.id === caseItem.id && (
                <div className="featured__details">
                  <h4>Key Facts</h4>
                  <ul className="featured__facts">
                    {caseItem.keyFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>

                  <h4>Theories</h4>
                  <ul className="featured__theories">
                    {caseItem.theories.map((theory, index) => (
                      <li key={index}>{theory}</li>
                    ))}
                  </ul>

                  {caseItem.videoUrl && (
                    <div className="featured__video">
                      <h4>Case Video</h4>
                      <iframe
                        src={caseItem.videoUrl}
                        title={`Video for ${caseItem.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStoriesSection;
