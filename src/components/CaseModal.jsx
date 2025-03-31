import React from 'react';
import './CaseModal.css';

const CaseModal = ({ caseData, onClose }) => {
  if (!caseData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-title">
            <h2>{caseData.title}</h2>
            <div className="modal-metadata">
              <span className="modal-year">{caseData.year}</span>
              <span className="modal-location">{caseData.location}</span>
              <span className={`modal-status ${caseData.status.toLowerCase().replace(' ', '-')}`}>
                {caseData.status}
              </span>
            </div>
          </div>
        </div>

        <div className="modal-media">
          {caseData.videoUrl && (
            <div className="modal-video">
              <iframe
                src={caseData.videoUrl}
                title={`${caseData.title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <img src={caseData.imageUrl} alt={caseData.title} className="modal-image" />
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Case Overview</h3>
            <p>{caseData.details}</p>
          </div>

          {caseData.keyFacts && (
            <div className="modal-section">
              <h3>Key Facts</h3>
              <ul className="modal-facts">
                {caseData.keyFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          )}

          {caseData.theories && (
            <div className="modal-section">
              <h3>Leading Theories</h3>
              <ul className="modal-theories">
                {caseData.theories.map((theory, index) => (
                  <li key={index}>
                    <h4>{theory.title}</h4>
                    <p>{theory.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-tags">
            {caseData.tags.map((tag, index) => (
              <span key={index} className="modal-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseModal;
