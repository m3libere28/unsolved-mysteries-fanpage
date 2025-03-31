// src/App.jsx
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Import Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import CaseShowcaseSection from './sections/CaseShowcaseSection';
import MapSection from './sections/MapSection';
import ArchivesSection from './sections/ArchivesSection';

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

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
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
      <div className="content-wrapper">
        <Navbar />
        <main>
          <HeroSection />
          <CaseShowcaseSection setSelectedCaseId={setSelectedCaseId} />
          <MapSection />
          <ArchivesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;