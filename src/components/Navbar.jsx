import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';
import logo from './logo.svg';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Navbar animation on scroll
    ScrollTrigger.create({
      start: 'top -10%',
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      }
    });

    // Menu items stagger animation
    const menuItems = document.querySelectorAll('.nav-link');
    gsap.from(menuItems, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Animate menu items when opening
    if (!isMenuOpen) {
      const menuItems = document.querySelectorAll('.mobile-nav-link');
      gsap.from(menuItems, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: section, offsetY: 70 },
        ease: "power2.inOut"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Unsolved Mysteries" className="nav-logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('cases')}
          >
            Cases
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('map')}
          >
            Map
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('archives')}
          >
            Archives
          </button>
          <button 
            className="nav-link evidence-btn" 
            onClick={() => scrollToSection('evidence')}
          >
            Submit Evidence
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('cases')}
          >
            Cases
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('map')}
          >
            Map
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('archives')}
          >
            Archives
          </button>
          <button 
            className="mobile-nav-link evidence-btn" 
            onClick={() => scrollToSection('evidence')}
          >
            Submit Evidence
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;