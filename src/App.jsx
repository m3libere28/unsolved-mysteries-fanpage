import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CasesPage from './pages/CasesPage';
import TimelinePage from './pages/TimelinePage';
import ParanormalToolsPage from './pages/ParanormalToolsPage';
import SubmitTheoryPage from './pages/SubmitTheoryPage';
import NotFoundPage from './pages/NotFoundPage';
import LoaderPage from './pages/LoaderPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoaderPage />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="main">
                  <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="cases" element={<CasesPage />} />
                    <Route path="timeline" element={<TimelinePage />} />
                    <Route path="paranormal-tools" element={<ParanormalToolsPage />} />
                    <Route path="submit-theory" element={<SubmitTheoryPage />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
        {/* Footer will go here */}
      </div>
    </Router>
  );
};

export default App;
