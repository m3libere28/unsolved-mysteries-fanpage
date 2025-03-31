import React from 'react';
import '../styles/SubmitTheoryPage.css';

const SubmitTheoryPage = () => {
  return (
    <div className="submit-theory">
      <h1>Submit Your Theory</h1>
      <div className="submit-theory__container">
        <div className="submit-theory__info">
          <h2>Have a breakthrough?</h2>
          <p>Share your insights on any of our unsolved cases. Your theory could be the key to solving a mystery.</p>
        </div>
        <form className="submit-theory__form">
          {/* Form will go here */}
        </form>
      </div>
    </div>
  );
};

export default SubmitTheoryPage;
