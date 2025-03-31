import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cases } from '../data/cases';
import '../styles/SubmitTheoryPage.css';

const SubmitTheoryPage = () => {
  const [formData, setFormData] = useState({
    caseName: '',
    theory: '',
    evidence: '',
    contact: '',
    anonymous: false,
    files: [],
    agreeToTerms: false
  });

  const [step, setStep] = useState(1);
  const [selectedCase, setSelectedCase] = useState(null);
  const totalSteps = 3;

  useEffect(() => {
    if (formData.caseName) {
      const found = cases.find(c => c.id.toString() === formData.caseName);
      setSelectedCase(found);
    } else {
      setSelectedCase(null);
    }
  }, [formData.caseName]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        files: Array.from(files)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms before submitting.');
      return;
    }
    // TODO: Handle form submission
    console.log('Theory submitted:', formData);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="form-step"
          >
            <h3>Select Case</h3>
            <div className="form-group">
              <label htmlFor="caseName">Which case is your theory about?</label>
              <select
                id="caseName"
                name="caseName"
                value={formData.caseName}
                onChange={handleChange}
                required
              >
                <option value="">Select a case...</option>
                {cases.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.year}, {c.location})
                  </option>
                ))}
              </select>
            </div>

            {selectedCase && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="case-preview"
              >
                <div className="case-preview__image">
                  <img src={selectedCase.image} alt={selectedCase.title} />
                </div>
                <div className="case-preview__content">
                  <h4>{selectedCase.title}</h4>
                  <p className="case-preview__meta">
                    {selectedCase.year} • {selectedCase.location} • {selectedCase.category}
                  </p>
                  <p className="case-preview__description">{selectedCase.shortDescription}</p>
                  <div className="case-preview__facts">
                    <h5>Key Facts:</h5>
                    <ul>
                      {selectedCase.keyFacts.slice(0, 3).map((fact, index) => (
                        <li key={index}>{fact}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="form-step"
          >
            <h3>Share Your Theory</h3>
            <div className="form-group">
              <label htmlFor="theory">What's your theory about what happened?</label>
              <textarea
                id="theory"
                name="theory"
                value={formData.theory}
                onChange={handleChange}
                rows={6}
                required
                placeholder="Describe your theory in detail..."
              />
              <div className="form-help">
                Consider including:
                <ul>
                  <li>Timeline of events</li>
                  <li>Potential motives</li>
                  <li>Key players involved</li>
                  <li>Connections to other cases</li>
                </ul>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="evidence">What evidence supports your theory?</label>
              <textarea
                id="evidence"
                name="evidence"
                value={formData.evidence}
                onChange={handleChange}
                rows={4}
                required
                placeholder="List any evidence that supports your theory..."
              />
            </div>
            <div className="form-group file-upload">
              <label>
                <span>Upload Supporting Files (Optional)</span>
                <small>Images, documents, or other relevant files</small>
              </label>
              <div className="file-upload__zone">
                <input
                  type="file"
                  name="files"
                  onChange={handleChange}
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                />
                <div className="file-upload__placeholder">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drag files here or click to upload</p>
                  <small>Max 5 files, 10MB each</small>
                </div>
              </div>
              {formData.files.length > 0 && (
                <div className="file-list">
                  {formData.files.map((file, index) => (
                    <div key={index} className="file-item">
                      <span>{file.name}</span>
                      <small>{(file.size / 1024 / 1024).toFixed(2)} MB</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="form-step"
          >
            <h3>Contact Information</h3>
            <div className="form-group">
              <label htmlFor="contact">How can investigators contact you? (Optional)</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Email or phone number..."
              />
              <small className="form-help">
                Your contact information will be kept confidential and only used for follow-up questions.
              </small>
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                />
                Submit anonymously
              </label>
              <small className="checkbox-help">
                Your identity will not be shared publicly if you choose to remain anonymous.
              </small>
            </div>
            <div className="form-group checkbox-group terms">
              <label>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                I understand that false statements can hinder investigations
              </label>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="submit-theory">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="submit-theory__container"
      >
        <div className="submit-theory__info">
          <h1 data-text="Submit Your Theory">Submit Your Theory</h1>
          <p className="tagline">Have a breakthrough? Share your insights.</p>
          <div className="progress-bar">
            <div 
              className="progress-bar__fill"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
            <div className="progress-bar__steps">
              {[1, 2, 3].map(num => (
                <div
                  key={num}
                  className={`progress-bar__step ${num <= step ? 'active' : ''}`}
                >
                  <span className="step-number">{num}</span>
                  <span className="step-label">
                    {num === 1 ? 'Case' : num === 2 ? 'Theory' : 'Contact'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="submit-theory__form" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
          
          <div className="form-navigation">
            {step > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={prevStep}
                className="btn btn-secondary"
              >
                Back
              </motion.button>
            )}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type={step === totalSteps ? 'submit' : 'button'}
              onClick={step === totalSteps ? undefined : nextStep}
              className="btn btn-primary"
            >
              {step === totalSteps ? 'Submit Theory' : 'Continue'}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {selectedCase && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="similar-theories"
        >
          <h3>Popular Theories for {selectedCase.title}</h3>
          <div className="theory-list">
            {selectedCase.theories.map((theory, index) => (
              <div key={index} className="theory-card">
                <div className="theory-card__content">
                  <h4>Theory {index + 1}</h4>
                  <p>{theory}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SubmitTheoryPage;
