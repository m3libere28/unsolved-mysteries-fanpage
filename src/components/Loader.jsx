import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    });

    // Initial state
    gsap.set(textRef.current.children, {
      opacity: 0,
      y: 20
    });

    // Animation sequence
    tl.to(loaderRef.current, {
      opacity: 1,
      duration: 1
    })
    .to(textRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out"
    })
    .to([textRef.current, overlayRef.current], {
      opacity: 0,
      duration: 1.5,
      delay: 1
    });

    // Fog animation
    gsap.to(".fog", {
      backgroundPosition: "100% 0%",
      repeat: -1,
      duration: 10,
      ease: "none"
    });
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div ref={overlayRef} className="fog-overlay">
        <div className="fog fog-1"></div>
        <div className="fog fog-2"></div>
      </div>
      <div ref={textRef} className="loader-content">
        <span className="word">Update:</span>
        <span className="word">Lost</span>
        <span className="word">Time:</span>
        <span className="word">20:45</span>
        <span className="word">Location:</span>
        <span className="word">Unknown</span>
        <span className="word">Status:</span>
        <span className="word">Unsolved</span>
      </div>
    </div>
  );
};

export default Loader;
