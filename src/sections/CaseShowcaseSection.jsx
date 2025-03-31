import React, { useState } from 'react';
import { cases } from '../data/cases';
import CaseModal from '../components/CaseModal';
import './CaseShowcaseSection.css';

const CaseCard = ({ caseData, onClick }) => {
  return (
    <div className="case-card" onClick={onClick}>
      <div className="case-card__image" style={{ backgroundImage: `url(${caseData.imageUrl})` }}>
        <div className="case-card__overlay">
          <span className="case-card__year">{caseData.year}</span>
          <div className="case-card__status">{caseData.status}</div>
        </div>
      </div>
      <div className="case-card__content">
        <h3 className="case-card__title">{caseData.title}</h3>
        <p className="case-card__location">{caseData.location}</p>
        <p className="case-card__summary">{caseData.summary}</p>
        <div className="case-card__tags">
          {caseData.tags.map((tag, index) => (
            <span key={index} className="case-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseShowcaseSection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);
  
  return (
    <section className="showcase" id="cases">
      <div className="showcase__header">
        <h2>INFAMOUS CASES</h2>
        <div className="showcase__line"></div>
        <p>Delve into history's most perplexing mysteries</p>
      </div>

      <div className="showcase__filters">
        <button 
          className={`showcase__filter ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All Cases
        </button>
        <button 
          className={`showcase__filter ${filter === 'Cold Case' ? 'active' : ''}`}
          onClick={() => setFilter('Cold Case')}
        >
          Cold Cases
        </button>
        <button 
          className={`showcase__filter ${filter === 'Active Investigation' ? 'active' : ''}`}
          onClick={() => setFilter('Active Investigation')}
        >
          Active Cases
        </button>
      </div>

      <div className="showcase__grid">
        {cases
          .filter(caseItem => filter === 'All' || caseItem.status === filter)
          .map(caseItem => (
            <CaseCard 
              key={caseItem.id} 
              caseData={caseItem} 
              onClick={() => setSelectedCase(caseItem)}
            />
          ))}
      </div>

      {selectedCase && (
        <CaseModal 
          caseData={selectedCase} 
          onClose={() => setSelectedCase(null)} 
        />
      )}
    </section>
  );
};

export default CaseShowcaseSection;