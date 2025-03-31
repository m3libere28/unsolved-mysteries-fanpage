import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__content">
        <Logo />
        
        <button 
          className={`navbar__menu-button ${isMenuOpen ? 'navbar__menu-button--active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('hero')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('cases')}>Cases</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('statistics')}>Analytics</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('featured')}>Featured</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;