import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cases } from '../data/cases';
import SpookyBackground from '../components/SpookyBackground';
import '../styles/TimelinePage.css';

const TimelinePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timelineRef = useRef(null);

  // Sort cases by year
  const sortedCases = [...cases].sort((a, b) => a.year - b.year);

  // Group cases by century and decade
  const groupedCases = sortedCases.reduce((acc, caseItem) => {
    const century = Math.floor(caseItem.year / 100) * 100;
    const decade = Math.floor(caseItem.year / 10) * 10;
    
    if (!acc[century]) {
      acc[century] = {};
    }
    if (!acc[century][decade]) {
      acc[century][decade] = [];
    }
    acc[century][decade].push(caseItem);
    return acc;
  }, {});

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const handleScroll = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filterCases = (period) => {
    setSelectedPeriod(period);
    // Scroll to the relevant section
    if (period !== 'all') {
      const element = document.getElementById(`decade-${period}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="timeline-page">
      <SpookyBackground />
      <motion.div 
        className="timeline-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Mystery Timeline</h1>
        <p>Journey through centuries of unsolved mysteries</p>
        
        <div className="timeline-filters">
          <button 
            className={selectedPeriod === 'all' ? 'active' : ''} 
            onClick={() => filterCases('all')}
          >
            All Periods
          </button>
          {Object.keys(groupedCases).map(century => 
            Object.keys(groupedCases[century]).map(decade => (
              <button
                key={decade}
                className={selectedPeriod === decade ? 'active' : ''}
                onClick={() => filterCases(decade)}
              >
                {decade}s
              </button>
            ))
          )}
        </div>
      </motion.div>

      <div className="timeline-container">
        <button 
          className="scroll-button left" 
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          ←
        </button>
        
        <div className="timeline-scroll" ref={timelineRef}>
          <div className="timeline-line" />
          
          {Object.entries(groupedCases).map(([century, decades]) => (
            <div key={century} className="timeline-century">
              <h2 className="century-label">{century}s</h2>
              
              {Object.entries(decades).map(([decade, decadeCases]) => (
                <div 
                  key={decade} 
                  id={`decade-${decade}`}
                  className="timeline-decade"
                >
                  <h3 className="decade-label">{decade}s</h3>
                  
                  <div className="decade-cases">
                    {decadeCases.map((caseItem) => (
                      <motion.div
                        key={caseItem.id}
                        className="timeline-case"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleCaseClick(caseItem)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="case-dot" />
                        <div className="case-year">{caseItem.year}</div>
                        <div className="case-card">
                          <img src={caseItem.image} alt={caseItem.title} />
                          <div className="case-info">
                            <h4>{caseItem.title}</h4>
                            <p>{caseItem.shortDescription}</p>
                            <span className={`case-status ${caseItem.status.toLowerCase().replace(' ', '-')}`}>
                              {caseItem.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button 
          className="scroll-button right" 
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedCase && (
          <motion.div
            className="timeline-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="timeline-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ×
              </button>
              
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedCase.image} alt={selectedCase.title} />
                </div>
                
                <div className="modal-info">
                  <h2>{selectedCase.title}</h2>
                  <div className="modal-metadata">
                    <span className="year">{selectedCase.year}</span>
                    <span className="location">{selectedCase.location}</span>
                    <span className={`status ${selectedCase.status.toLowerCase().replace(' ', '-')}`}>
                      {selectedCase.status}
                    </span>
                  </div>
                  
                  <p className="description">{selectedCase.fullDescription}</p>
                  
                  <div className="key-facts">
                    <h3>Key Facts</h3>
                    <ul>
                      {selectedCase.keyFacts.map((fact, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {fact}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="theories">
                    <h3>Major Theories</h3>
                    <ul>
                      {selectedCase.theories.map((theory, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {theory}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedCase.videoUrl && (
                    <div className="modal-video">
                      <h3>Related Video</h3>
                      <iframe
                        src={selectedCase.videoUrl}
                        title={`Video about ${selectedCase.title}`}
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelinePage;
