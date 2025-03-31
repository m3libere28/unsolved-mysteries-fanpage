import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Case File Missing</h2>
      <p>The file you're looking for has been redacted or doesn't exist.</p>
      <Link to="/" className="not-found__button">Return to HQ</Link>
    </div>
  );
};

export default NotFoundPage;
