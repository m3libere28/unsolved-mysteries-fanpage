// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Fan Page Name. All rights reserved.</p>
    </footer>
  );
}
export default Footer;