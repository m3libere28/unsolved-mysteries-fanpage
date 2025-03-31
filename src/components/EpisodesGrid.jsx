import React, { useState } from 'react';
import { episodes, statistics } from '../data/episodes';
import EpisodeModal from './EpisodeModal';
import './EpisodesGrid.css';

const EpisodesGrid = () => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [networkFilter, setNetworkFilter] = useState('all');
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const currentSeason = episodes.find(s => s.number === selectedSeason);
  
  const filteredEpisodes = currentSeason?.episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getNetworkColor = (network) => {
    const colors = {
      'NBC': '#4bbe19',
      'CBS': '#ff5f1f',
      'Lifetime': '#ff69b4',
      'Netflix': '#e50914'
    };
    return colors[network] || '#ffffff';
  };

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode({
      ...episode,
      network: currentSeason.network
    });
  };

  return (
    <section className="episodes-section" id="episodes">
      <div className="episodes-header">
        <h2>Episode Guide</h2>
        <p>Explore all episodes from {statistics.yearsActive.join(', ')}</p>
      </div>

      <div className="network-filter">
        <button 
          className={`network-button ${networkFilter === 'all' ? 'active' : ''}`}
          onClick={() => setNetworkFilter('all')}
        >
          All Networks
        </button>
        {statistics.networks.map(network => (
          <button
            key={network}
            className={`network-button ${networkFilter === network ? 'active' : ''}`}
            onClick={() => setNetworkFilter(network)}
            style={{ '--network-color': getNetworkColor(network) }}
          >
            {network}
          </button>
        ))}
      </div>

      <div className="episodes-controls">
        <div className="season-selector">
          {episodes
            .filter(season => networkFilter === 'all' || season.network === networkFilter)
            .map(season => (
              <button
                key={season.number}
                className={`season-button ${selectedSeason === season.number ? 'active' : ''}`}
                onClick={() => setSelectedSeason(season.number)}
                style={{ '--network-color': getNetworkColor(season.network) }}
              >
                <span className="season-number">Season {season.number}</span>
                <span className="season-year">{season.year}</span>
                <span className="season-network">{season.network}</span>
              </button>
          ))}
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search episodes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="episodes-grid">
        {filteredEpisodes?.map((episode, index) => (
          <div 
            key={index} 
            className="episode-card"
            style={{ '--network-color': getNetworkColor(currentSeason.network) }}
            onClick={() => handleEpisodeClick(episode)}
          >
            <div className="episode-number">{index + 1}</div>
            <div className="episode-info">
              <h3>{episode.title}</h3>
              <div className="episode-meta">
                <span className="air-date">
                  <span className="icon">📅</span>
                  {episode.airDate}
                </span>
                <span className="network">
                  <span className="icon">📺</span>
                  {currentSeason.network}
                </span>
              </div>
            </div>
            <div className="episode-hover">
              <div className="view-details">
                <span className="icon">👁️</span>
                View Details
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEpisodes?.length === 0 && (
        <div className="no-results">
          <p>No episodes found matching "{searchTerm}"</p>
        </div>
      )}

      <div className="episodes-stats">
        <div className="stat-item">
          <span className="stat-number">{statistics.totalEpisodes}</span>
          <span className="stat-label">Total Episodes</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{statistics.totalSeasons}</span>
          <span className="stat-label">Seasons</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{statistics.networks.length}</span>
          <span className="stat-label">Networks</span>
        </div>
        <div className="stat-item years-active">
          <span className="stat-number">{statistics.yearsActive[0].split('-')[0]}</span>
          <span className="stat-label">First Aired</span>
        </div>
      </div>

      {selectedEpisode && (
        <EpisodeModal
          episode={selectedEpisode}
          onClose={() => setSelectedEpisode(null)}
          network={getNetworkColor(selectedEpisode.network)}
        />
      )}
    </section>
  );
};

export default EpisodesGrid;
