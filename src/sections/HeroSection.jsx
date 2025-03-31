import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';
import detectiveImg from '../images/hero-detective.jpg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Parallax effect on the background
    tl.to(sectionRef.current, {
      backgroundPosition: '50% 100%',
      ease: 'none'
    });

    // Text reveal animation
    gsap.from(textRef.current.children, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Red line animation
    gsap.from('.red-line', {
      scaleX: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'power3.inOut'
    });

  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="hero-section" 
      id="hero"
      style={{ backgroundImage: `url(${detectiveImg})` }}
    >
      <div className="overlay"></div>
      <div ref={textRef} className="hero-content">
        <h1>UNSOLVED MYSTERIES</h1>
        <div className="red-line"></div>
        <p className="tagline">Every case has a story. Every story needs to be told.</p>
        <div className="case-status">
          <span className="status-label">STATUS:</span>
          <span className="status-value">INVESTIGATION ONGOING</span>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to Investigate</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;