// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  // TODO: Implement smooth scrolling to section IDs on link click
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="nav-logo">
        Unsolved Mysteries
      </a>
      <ul className="nav-links">
        {/* Use anchor links with onClick for smooth scroll */}
        <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
        <li><a href="#cases" onClick={(e) => { e.preventDefault(); scrollToSection('cases'); }}>Cases</a></li>
        <li><a href="#map" onClick={(e) => { e.preventDefault(); scrollToSection('map'); }}>Map</a></li>
        <li><a href="#archives" onClick={(e) => { e.preventDefault(); scrollToSection('archives'); }}>Archives</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;