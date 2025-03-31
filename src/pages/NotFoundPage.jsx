import React from 'react';
import { Link } from 'react-router-dom'; // Need react-router-dom installed

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the Home Page</Link>
    </div>
  );
}

export default NotFoundPage;