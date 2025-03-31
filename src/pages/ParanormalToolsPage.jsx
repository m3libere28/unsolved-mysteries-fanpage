import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeButton from '../components/HomeButton';
import HauntedHouseBackground from '../components/HauntedHouseBackground';
import { toolImages, toolHistories } from '../data/paranormalImages';
import { paranormalCases } from '../data/paranormalCases';
import '../styles/ParanormalToolsPage.css';

const ParanormalToolsPage = () => {
  const [activeTab, setActiveTab] = useState('tools');
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [showInfo, setShowInfo] = useState(null);

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
    setActiveTab('cases');
  };

  const handleBackClick = () => {
    if (activeTab === 'cases' && selectedCase) {
      setSelectedCase(null);
    } else if (activeTab === 'cases') {
      setActiveTab('tools');
      setSelectedTool(null);
    }
  };

  const renderToolsGrid = () => (
    <>
      <div className="tools-grid">
        {Object.entries(toolHistories).map(([tool, data]) => (
          <motion.div
            key={tool}
            className="tool-card"
            onClick={() => handleToolClick(tool)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={toolImages[tool].icon}
              alt={data.title}
              className="tool-icon"
            />
            <h2>{data.title}</h2>
            <p className="tool-description">{data.history.split('.')[0]}.</p>
            <button className="learn-more-btn">View Related Cases →</button>
          </motion.div>
        ))}
      </div>

      <div className="info-section">
        <h2>About Paranormal Investigation</h2>
        <div className="info-grid">
          <div className="info-card" onClick={() => setShowInfo('history')}>
            <h3>History of Ghost Hunting</h3>
            <p>Discover how paranormal investigation has evolved from ancient times to modern day...</p>
            <span className="info-link">Read More →</span>
          </div>
          
          <div className="info-card" onClick={() => setShowInfo('science')}>
            <h3>The Science Behind It</h3>
            <p>Learn about the scientific principles and theories that drive paranormal research...</p>
            <span className="info-link">Read More →</span>
          </div>
          
          <div className="info-card" onClick={() => setShowInfo('methods')}>
            <h3>Investigation Methods</h3>
            <p>Explore different techniques and methodologies used in modern investigations...</p>
            <span className="info-link">Read More →</span>
          </div>
        </div>

        <AnimatePresence>
          {showInfo && (
            <motion.div 
              className="info-modal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="modal-content">
                <button className="close-btn" onClick={() => setShowInfo(null)}>×</button>
                <h3>{getInfoTitle(showInfo)}</h3>
                <div className="info-content">
                  {getInfoContent(showInfo)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="featured-quote">
          <blockquote>
            "The scientific man does not aim at an immediate result. He does not expect that his advanced ideas will be readily taken up. His work is like that of the planter — for the future."
            <footer>— Nikola Tesla</footer>
          </blockquote>
        </div>
      </div>
    </>
  );

  const renderCasesList = () => {
    const filteredCases = selectedTool
      ? paranormalCases.filter(c => c.toolsUsed[selectedTool])
      : [];

    return (
      <div className="cases-container">
        <div className="cases-header">
          <button className="back-button" onClick={handleBackClick}>
            ← Back to Tools
          </button>
          <h2>{toolHistories[selectedTool]?.title} Cases</h2>
        </div>
        
        <div className="cases-grid">
          {filteredCases.map(caseItem => (
            <motion.div
              key={caseItem.id}
              className={`case-card ${selectedCase?.id === caseItem.id ? 'active' : ''}`}
              onClick={() => setSelectedCase(selectedCase?.id === caseItem.id ? null : caseItem)}
              layoutId={`case-${caseItem.id}`}
            >
              <div className="case-header">
                <h3>{caseItem.title}</h3>
                <span className="case-episode">{caseItem.episode}</span>
              </div>
              
              <div className="case-preview">
                <img src={caseItem.images[0]} alt={caseItem.title} />
                <div className="case-overlay">
                  <p className="case-location">{caseItem.location}</p>
                  <p className="case-year">{caseItem.year}</p>
                </div>
              </div>

              <AnimatePresence>
                {selectedCase?.id === caseItem.id && (
                  <motion.div
                    className="case-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <p className="case-summary">{caseItem.summary}</p>
                    <div className="case-findings">
                      <h4>Tool Findings</h4>
                      <p>{caseItem.toolsUsed[selectedTool]}</p>
                    </div>
                    <div className="case-evidence">
                      <h4>Evidence</h4>
                      <ul>
                        {caseItem.evidence.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const getInfoTitle = (type) => {
    switch (type) {
      case 'history':
        return 'History of Ghost Hunting';
      case 'science':
        return 'The Science Behind Paranormal Investigation';
      case 'methods':
        return 'Modern Investigation Methods';
      default:
        return '';
    }
  };

  const getInfoContent = (type) => {
    switch (type) {
      case 'history':
        return (
          <>
            <p>Ghost hunting has evolved significantly over centuries. From ancient spiritual practices to modern scientific methods, the field has transformed dramatically. Early investigations often relied on spiritual mediums and basic tools like dowsing rods.</p>
            <p>The modern era of ghost hunting began in the late 19th century with the founding of the Society for Psychical Research (SPR) in 1882. This marked a shift towards more scientific approaches to investigating paranormal phenomena.</p>
            <p>The rise of technology in the 20th century brought new tools and methods, leading to today's sophisticated equipment and methodologies.</p>
          </>
        );
      case 'science':
        return (
          <>
            <p>Modern paranormal investigation incorporates various scientific principles from physics, electronics, and environmental science. Investigators use equipment that can detect changes in electromagnetic fields, temperature variations, and audio frequencies beyond human perception.</p>
            <p>The scientific method plays a crucial role: investigators form hypotheses, gather evidence, and attempt to rule out natural causes before considering paranormal explanations.</p>
            <p>Understanding concepts like infrasound, electromagnetic fields, and the principles of audio/video recording helps investigators separate genuine phenomena from natural occurrences.</p>
          </>
        );
      case 'methods':
        return (
          <>
            <p>Contemporary paranormal investigation combines traditional techniques with modern technology. Investigators typically follow a systematic approach:</p>
            <ul>
              <li>Historical research of the location</li>
              <li>Environmental baseline readings</li>
              <li>Controlled experiments with various tools</li>
              <li>Documentation through multiple media types</li>
              <li>Data analysis and review</li>
            </ul>
            <p>Teams often use a combination of tools and methods to gather different types of evidence, cross-referencing findings to build a comprehensive investigation.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <HauntedHouseBackground />
      <div className="paranormal-tools-page">
        <HomeButton />
        <h1>Paranormal Investigation Tools</h1>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'tools' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'tools' ? 20 : -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'tools' ? renderToolsGrid() : renderCasesList()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ParanormalToolsPage;
