// src/App.jsx
import React, { useState, useEffect } from 'react'; // Keep useState for later (selected case), useEffect for GSAP
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'; // Import global App styles

// --- Import Section Components ---
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import CaseShowcaseSection from './sections/CaseShowcaseSection';
import MapSection from './sections/MapSection';
import ArchivesSection from './sections/ArchivesSection';
// --- Import Case Detail Component later ---
// import CaseDetail from './components/CaseDetail';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [selectedCaseId, setSelectedCaseId] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Checking Firebase connection...');
  const [isLoading, setIsLoading] = useState(true);

  // Test Firebase connection
  useEffect(() => {
    const testConnection = async () => {
      try {
        const db = getFirestore();
        const testCollection = collection(db, 'test');
        await getDocs(testCollection);
        setConnectionStatus('Firebase connection successful!');
      } catch (error) {
        console.error('Firebase connection error:', error);
        setConnectionStatus('Firebase connection error: ' + error.message);
      }
    };

    testConnection();
  }, []);

  // --- GSAP Parallax Effect & Section Fade-in ---
  useEffect(() => {
    if (!isLoading) {
      // Deep background layer scrolls very slowly
      gsap.to("#parallax-bg-deep", {
        y: "-30%", // Moves the element itself up
        ease: "none",
        scrollTrigger: {
          trigger: ".content-wrapper", // Trigger animation based on main content scroll
          start: "top top",           // Start when top of content meets top of viewport
          end: "bottom bottom",       // End when bottom of content meets bottom of viewport
          scrub: 1.5                  // Smooth scrubbing (higher number = more lag/smoothing)
        }
      });

      // Mid-ground layer scrolls faster
      gsap.to("#parallax-bg-mid", {
        y: "-60%", // Moves more
        ease: "none",
        scrollTrigger: {
          trigger: ".content-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.75                 // Lower number = less lag/smoothing
        }
      });

      // Example: Fade in sections as they enter viewport
      gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section,
          { autoAlpha: 0, y: 50 }, // Start invisible and slightly down (autoAlpha handles opacity and visibility)
          {
            autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: "top 80%", // Start animation when 80% from top enters viewport
              // markers: true, // uncomment for debugging scrolltrigger positions
              toggleActions: "play none none none" // Play animation once on enter, don't reverse
            }
          });
      });

      // Cleanup function to kill ScrollTriggers when component unmounts
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="App">
      <div className="status-bar" style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: '10px', 
        background: connectionStatus.includes('error') ? '#ffebee' : '#e8f5e9',
        color: connectionStatus.includes('error') ? '#c62828' : '#2e7d32',
        zIndex: 1000,
        textAlign: 'center',
        transition: 'all 0.3s ease'
      }}>
        {connectionStatus}
      </div>
      {/* --- PARALLAX BACKGROUND LAYERS --- */}
      <div id="parallax-bg-deep" className="parallax-layer"></div>
      <div id="parallax-bg-mid" className="parallax-layer"></div>

      {/* --- MAIN CONTENT AREA --- */}
      <Navbar /> {/* Navbar component with smooth scroll */}

      <main className="content-wrapper"> {/* Sections container */}
        {/* Render Sections Vertically */}
        <HeroSection />
        <CaseShowcaseSection setSelectedCaseId={setSelectedCaseId} />
        <MapSection />
        <ArchivesSection />
        {/* Add more sections as required */}
      </main>

      {/* --- CONDITIONAL CASE DETAIL VIEW (Placeholder for later implementation) --- */}
      {/* {selectedCaseId && (
        <CaseDetail caseId={selectedCaseId} setSelectedCaseId={setSelectedCaseId} />
      )} */}

      <Footer /> {/* Footer component */}
    </div>
  );
}

export default App;