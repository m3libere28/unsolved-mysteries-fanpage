import React from 'react';

const ParanormalToolIcon = ({ type }) => {
  const icons = {
    emf: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9L7.1 5.69C8.45 4.63 10.15 4 12 4zM4 12c0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20c-4.42 0-8-3.58-8-8z"/>
        <path d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    temperature: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M12 2C8.13 2 5 5.13 5 9v7.15c-1.16.85-2 2.2-2 3.85 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.65-.84-3-2-3.85V9c0-2.76 2.24-5 5-5s5 2.24 5 5v7.15c-1.16.85-2 2.2-2 3.85 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.65-.84-3-2-3.85V9c0-3.87-3.13-7-7-7zm-4 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        <path d="M11 8v7.17c-1.17.41-2 1.52-2 2.83 0 .28.05.54.13.79L11 8z"/>
      </svg>
    ),
    evp: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
      </svg>
    ),
    spiritBox: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z"/>
        <path d="M8 9h8v2H8zm0 4h8v2H8z"/>
        <path d="M6 7h12v1H6zm0 9h12v1H6z"/>
      </svg>
    )
  };

  return (
    <div className="tool-icon">
      {icons[type]}
    </div>
  );
};

export default ParanormalToolIcon;
