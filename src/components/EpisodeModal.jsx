import React from 'react';
import './EpisodeModal.css';

const EpisodeModal = ({ episode, onClose, network }) => {
  if (!episode) return null;

  return (
    <div className="episode-modal-overlay" onClick={onClose}>
      <div className="episode-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-content" style={{ '--network-color': network }}>
          <div className="modal-image">
            <img 
              src={episode.details.image} 
              alt={episode.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/episodes/default-placeholder.jpg';
              }}
            />
          </div>
          
          <div className="modal-info">
            <div className="modal-header">
              <h2>{episode.title}</h2>
              <div className="modal-meta">
                <span className="air-date">
                  <span className="icon">📅</span>
                  {episode.airDate}
                </span>
                <span className="network-badge" style={{ backgroundColor: network }}>
                  {episode.network}
                </span>
              </div>
            </div>
            
            <div className="modal-description">
              <p>{episode.details.description}</p>
            </div>
            
            <div className="modal-footer">
              <div className="theme-music">
                <span className="icon">🎵</span>
                Theme Music: "Theme from Unsolved Mysteries" by Gary Malkin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeModal;
