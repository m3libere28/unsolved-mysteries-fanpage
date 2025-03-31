import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/CaseModal.css';

const CaseModal = ({ isOpen, onClose, caseData }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-header">
            <h2>{caseData.title}</h2>
            <div className="modal-metadata">
              <span className="modal-category">{caseData.category}</span>
              <span className="modal-year">{caseData.year}</span>
              <span className="modal-location">{caseData.location}</span>
              <span className={`modal-status ${caseData.status.toLowerCase().replace(' ', '-')}`}>
                {caseData.status}
              </span>
            </div>
          </div>

          <div className="modal-media">
            <img src={caseData.image} alt={caseData.title} className="modal-image" />
            {caseData.videoUrl && (
              <div className="modal-video">
                <iframe
                  src={caseData.videoUrl}
                  title={`Video about ${caseData.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <div className="modal-body">
            <p className="modal-description">{caseData.fullDescription}</p>
            
            <div className="modal-section">
              <h3>Key Facts</h3>
              <ul className="modal-facts">
                {caseData.keyFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h3>Major Theories</h3>
              <ul className="modal-theories">
                {caseData.theories.map((theory, index) => (
                  <li key={index}>{theory}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseModal;
