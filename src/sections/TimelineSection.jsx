import React, { useEffect, useRef } from 'react';
import './TimelineSection.css';
import { cases } from '../data/cases';

const TimelineSection = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline__item');
      
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          item.classList.add('timeline__item--visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sort cases by year
  const sortedCases = [...cases].sort((a, b) => a.year - b.year);

  return (
    <section id="timeline" className="timeline">
      <h2 className="timeline__title">Mystery Timeline</h2>
      <div className="timeline__line"></div>
      
      <div className="timeline__container" ref={timelineRef}>
        {sortedCases.map((caseItem, index) => (
          <div 
            key={caseItem.id} 
            className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
          >
            <div className="timeline__content">
              <div className="timeline__year">{caseItem.year}</div>
              <h3 className="timeline__case-title">{caseItem.title}</h3>
              <p className="timeline__location">{caseItem.location}</p>
              <p className="timeline__status">Status: {caseItem.status}</p>
              <p className="timeline__description">{caseItem.summary}</p>
              <div className="timeline__dot"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
