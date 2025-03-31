import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CasesPage from './pages/CasesPage';
import TimelinePage from './pages/TimelinePage';
import SubmitTheoryPage from './pages/SubmitTheoryPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/submit-theory" element={<SubmitTheoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {/* Footer will go here */}
      </div>
    </Router>
  );
}

export default App;
