// src/sections/CaseShowcaseSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Ensure path is correct
import './SectionStyles.css';
import './CaseShowcaseSection.css'; // Specific styles

// ----- CaseCard Component (Internal or move to /components) -----
function CaseCard({ caseItem, onSelectCase }) {
  const cardRef = useRef(null); // Ref for GSAP animation

  // Example simple hover effect with GSAP
  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -8, scale: 1.03, duration: 0.2, ease: 'power2.out', boxShadow: '0 10px 20px rgba(0,0,0,0.4)' });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' });
  };

  return (
    <div
      ref={cardRef}
      className="case-card"
      onClick={() => onSelectCase(caseItem.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       <h2>{caseItem.title}</h2>
       <p className="case-category">Category: {caseItem.category}</p>
       <p className="case-status">Status: {caseItem.status}</p>
       <p className="case-date">Date: {caseItem.date}</p>
       <p className="case-synopsis">{caseItem.synopsis.substring(0, 100)}...</p>
       {/* Make "View Details" appear on hover maybe */}
       {/* <span className="details-prompt">View Details</span> */}
    </div>
  );
}
// ----- End CaseCard Component -----


function CaseShowcaseSection({ setSelectedCaseId }) { // Receive setter
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All'); // Basic filter state example

  useEffect(() => {
      const fetchCases = async () => {
        setLoading(true); setError(null);
        try {
          const casesCollectionRef = collection(db, 'cases');
          // --- Basic Firestore Query (Adapt as needed) ---
          const q = query(casesCollectionRef, orderBy('title'));
          const querySnapshot = await getDocs(q);
          const casesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCases(casesData);
        } catch (err) {
          console.error("Error fetching cases:", err);
          setError("Failed to load case files. Please check connection or console.");
        } finally { setLoading(false); }
      };
      fetchCases();
    }, []); // Runs once on mount

  // Example Filtering Logic (very basic)
  const filteredCases = cases.filter(caseItem => {
     if (filter === 'All') return true;
     return caseItem.category === filter; // Assuming 'category' field exists
  });

  // --- TODO: Add real filtering UI later ---


  return (
    // Note: Section base styles are in SectionStyles.css
    <section id="cases" className="section case-showcase-section">
      <h2>Case Files</h2>
      {/* --- Basic Filter Buttons (Replace with better UI) --- */}
       <div className="filter-buttons" style={{ marginBottom: '2rem' }}>
         <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
         <button onClick={() => setFilter('Disappearance')} className={filter === 'Disappearance' ? 'active' : ''}>Disappearances</button>
         <button onClick={() => setFilter('Historical Mystery')} className={filter === 'Historical Mystery' ? 'active' : ''}>Historical</button>
         {/* Add more category buttons based on your Firestore data */}
       </div>

      {/* --- Loading / Error / Content --- */}
      {loading && <p>Loading files from the archive...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
         <div className="case-list"> {/* Grid layout defined in CSS */}
           {filteredCases.length === 0 ? (
              <p>No cases match the current filter.</p>
           ) : (
             filteredCases.map(caseItem => (
               <CaseCard
                 key={caseItem.id}
                 caseItem={caseItem}
                 onSelectCase={setSelectedCaseId} // Pass the setter function down
               />
             ))
           )}
         </div>
      )}
    </section>
  );
}
export default CaseShowcaseSection;