// src/sections/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './SectionStyles.css';
import './HeroSection.css'; // Specific Hero styles

function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Example entrance animation for hero content
    gsap.fromTo(titleRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo(subtitleRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
  }, []);


  return (
    <section id="hero" className="section hero-section" ref={heroRef}>
      <div className="hero-content">
         {/* Add ::before pseudo element for dark overlay maybe */}
         <h1 ref={titleRef}>Into the Unknown</h1>
         <p ref={subtitleRef}>Some Mysteries Remain Unsolved.</p>
      </div>
       {/* Add down scroll arrow indicator? */}
    </section>
  );
}
export default HeroSection;