import React, { useState, useEffect } from 'react';
// Import functions from Firestore SDK
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// Import the 'db' object we exported from our config file
import { db } from '../firebaseConfig';
// Optional: Import Link for later use
// import { Link } from 'react-router-dom';
import './CaseFilesPage.css'; // We'll create this for styling later

function CaseFilesPage() {
  // State variables
  const [cases, setCases] = useState([]); // To store the array of cases
  const [loading, setLoading] = useState(true); // To show loading message
  const [error, setError] = useState(null); // To show error message

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Define the async function to fetch cases
    const fetchCases = async () => {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        // 1. Get a reference to the 'cases' collection
        const casesCollectionRef = collection(db, 'cases');

        // 2. Create a query (optional: order by title alphabetically)
        const q = query(casesCollectionRef, orderBy('title'));
        // You could also order by 'date' or another field if needed

        // 3. Execute the query and get the snapshot
        const querySnapshot = await getDocs(q);

        // 4. Map over the documents in the snapshot to get the data
        const casesData = querySnapshot.docs.map(doc => ({
          id: doc.id, // Get the unique document ID
          ...doc.data() // Get all fields (title, synopsis, etc.)
        }));

        // 5. Update the state with the fetched cases
        setCases(casesData);

      } catch (err) {
        // If an error occurs during fetch
        console.error("Error fetching cases:", err); // Log error for debugging
        setError("Failed to load cases. Please try again later."); // Set error message for user
      } finally {
        // Whether successful or failed, stop loading
        setLoading(false);
      }
    };

    fetchCases(); // Call the function to fetch data

  }, []); // The empty dependency array [] means this effect runs only ONCE when the component mounts

  // Render the component UI
  return (
    <div className="case-files-container"> {/* Add a container class */}
      <h1>Case Files Archive</h1>

      {/* Show loading message */}
      {loading && <p>Loading cases...</p>}

      {/* Show error message if fetch failed */}
      {error && <p className="error-message">{error}</p>}

      {/* Show case list if not loading and no error */}
      {!loading && !error && (
        <div className="case-list">
          {cases.length === 0 ? (
            // Show message if no cases were found (and not loading)
            <p>No cases found in the database.</p>
          ) : (
            // Map over the cases array and render a card for each case
            cases.map(caseItem => (
              <div key={caseItem.id} className="case-card"> {/* Use unique ID as key */}
                <h2>{caseItem.title}</h2>
                <p className="case-category">Category: {caseItem.category}</p>
                <p className="case-status">Status: {caseItem.status}</p>
                <p className="case-date">Date: {caseItem.date}</p>
                <p className="case-synopsis">{caseItem.synopsis}</p>
                {/* Add a link to a detail page later */}
                {/* <Link to={`/cases/${caseItem.id}`} className="details-link">View Details</Link> */}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default CaseFilesPage;