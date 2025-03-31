// src/sections/MapSection.jsx
import React from 'react';
import './SectionStyles.css';
// Import Map CSS/JS Libraries later

function MapSection() {
  return (
    // Note: Section base styles are in SectionStyles.css
    <section id="map" className="section map-section">
      <h2>Case Locations</h2>
      <p>Visualizing the geographical spread of the unknown.</p>
      <div id="map-container" style={{ height: '400px', width: '80%', backgroundColor: '#333', marginTop: '2rem' }}>
        {/* Map library (e.g., Leaflet, Mapbox GL JS) will target this div */}
        Map Placeholder
      </div>
    </section>
  );
}
export default MapSection;