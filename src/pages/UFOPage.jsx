import React, { useState, useEffect } from 'react';
import { cases } from '../data/cases';
import '../styles/UFOPage.css';

const UFOPage = () => {
  const [selectedSighting, setSelectedSighting] = useState(null);
  const [filter, setFilter] = useState('all');
  const [ufoSightings, setUfoSightings] = useState([]);
  
  useEffect(() => {
    const sightings = cases.filter(caseItem => 
      caseItem.category === 'UFO' || (caseItem.tags && caseItem.tags.includes('ufo'))
    );
    setUfoSightings(sightings);
  }, []);

  const filterOptions = [
    { id: 'all', label: 'All Sightings' },
    { id: 'military', label: 'Military Cases' },
    { id: 'physical', label: 'Physical Evidence' },
    { id: 'mass-sighting', label: 'Mass Sightings' },
    { id: 'beings', label: 'Entity Encounters' },
    { id: 'abduction', label: 'Abduction Cases' },
    { id: 'radiation', label: 'Radiation Effects' },
    { id: 'aviation', label: 'Aviation Cases' },
    { id: 'landing', label: 'Landing Traces' }
  ];

  const filteredSightings = filter === 'all' 
    ? ufoSightings 
    : ufoSightings.filter(sighting => 
        sighting.tags && sighting.tags.includes(filter)
      );

  return (
    <div className="ufo-page">
      <div className="ufo-header">
        <h1>UFO Encounters</h1>
        <p>Explore mysterious sightings and close encounters that defy explanation</p>
      </div>

      <div className="ufo-content">
        <div className="ufo-filters">
          {filterOptions.map(option => (
            <button
              key={option.id}
              className={`filter-btn ${filter === option.id ? 'active' : ''}`}
              onClick={() => setFilter(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="ufo-cards">
          {filteredSightings.length > 0 ? (
            filteredSightings.map(sighting => (
              <div
                key={sighting.id}
                className="ufo-card"
                onClick={() => setSelectedSighting(sighting)}
              >
                <div className="ufo-card__image">
                  <img src={sighting.image || '/assets/UFO.png'} alt={sighting.title} />
                </div>
                <div className="ufo-card__content">
                  <h3>{sighting.title}</h3>
                  <div className="ufo-card__meta">
                    <span>{sighting.year}</span>
                    <span>{sighting.location}</span>
                  </div>
                  <p>{sighting.shortDescription}</p>
                  {sighting.tags && (
                    <div className="ufo-card__tags">
                      {sighting.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No UFO sightings found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>

      {selectedSighting && (
        <div 
          className="ufo-modal"
          onClick={(e) => {
            if (e.target.className === 'ufo-modal') {
              setSelectedSighting(null);
            }
          }}
        >
          <div className="ufo-modal__content">
            <button 
              className="ufo-modal__close"
              onClick={() => setSelectedSighting(null)}
            >
              ×
            </button>
            <div className="ufo-modal__info">
              <h2>{selectedSighting.title}</h2>
              <div className="ufo-modal__meta">
                <span>{selectedSighting.year}</span>
                <span>{selectedSighting.location}</span>
              </div>
              <p className="ufo-modal__description">
                {selectedSighting.fullDescription || selectedSighting.shortDescription}
              </p>
              {selectedSighting.keyFacts && (
                <div className="ufo-modal__evidence">
                  <h3>Key Evidence</h3>
                  <ul>
                    {selectedSighting.keyFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedSighting.witnesses && (
                <div className="ufo-modal__witnesses">
                  <h3>Witness Accounts</h3>
                  <div className="witness-list">
                    {selectedSighting.witnesses.map((witness, index) => (
                      <div key={index} className="witness-item">
                        <p>{witness}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UFOPage;
