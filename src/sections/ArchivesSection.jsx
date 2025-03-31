// src/sections/ArchivesSection.jsx
import React from 'react';
import './SectionStyles.css';
import './ArchivesSection.css'; // Specific Styles

function ArchivesSection() {
  return (
    // Note: Section base styles are in SectionStyles.css
    <section id="archives" className="section archives-section">
      <h2>The Archives</h2>
      <p>Delving into classic cases and resources.</p>
      {/* Add retro elements, maybe styled content cards */}
      <div className="archive-content">
        Content related to old shows, books, resources...
        {/* Could use CSS filters / scanline effects here */}
      </div>
    </section>
  );
}
export default ArchivesSection;