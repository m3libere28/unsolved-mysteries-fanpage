import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cases, categories, decades } from '../data/cases';
import CaseModal from '../components/CaseModal';
import SpookyBackground from '../components/SpookyBackground';
import '../styles/CasesPage.css';

const CasesPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filters, setFilters] = useState({
    category: 'all',
    decade: 'all',
    search: ''
  });
  const [filteredCases, setFilteredCases] = useState(cases);

  // Filter cases based on selected filters
  useEffect(() => {
    let result = cases;

    if (filters.category !== 'all') {
      result = result.filter(c => c.category === filters.category);
    }

    if (filters.decade !== 'all') {
      result = result.filter(c => {
        if (filters.decade === 'Pre-1900') return c.year < 1900;
        const decadeStart = parseInt(filters.decade) || 0;
        return c.year >= decadeStart && c.year < decadeStart + 10;
      });
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(searchLower) ||
        c.description.toLowerCase().includes(searchLower) ||
        c.location.toLowerCase().includes(searchLower)
      );
    }

    setFilteredCases(result);
  }, [filters]);

  return (
    <div className="cases-page">
      <SpookyBackground />
      <div className="cases-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Case Files
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Explore decades of unsolved mysteries, from historic cold cases to modern enigmas. Each file tells a story waiting to be unraveled.
        </motion.p>
      </div>

      <div className="cases-filters">
        <div className="filter-group">
          <select
            value={filters.category}
            onChange={e => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={filters.decade}
            onChange={e => setFilters({ ...filters, decade: e.target.value })}
          >
            <option value="all">All Time Periods</option>
            {decades.map(decade => (
              <option key={decade} value={decade}>{decade}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search cases..."
            value={filters.search}
            onChange={e => setFilters({ ...filters, search: e.target.value })}
          />
        </div>
      </div>

      <motion.div 
        className="cases-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AnimatePresence>
          {filteredCases.map(caseItem => (
            <motion.div
              key={caseItem.id}
              className="case-card"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCase(caseItem)}
            >
              <div className="case-card__image">
                <img src={caseItem.image} alt={caseItem.title} />
                <div className="case-card__overlay">
                  <span className={`case-status ${caseItem.status.toLowerCase().replace(' ', '-')}`}>
                    {caseItem.status}
                  </span>
                </div>
              </div>
              <div className="case-card__content">
                <h3>{caseItem.title}</h3>
                <div className="case-card__metadata">
                  <span>{caseItem.year}</span>
                  <span>{caseItem.location}</span>
                </div>
                <p>{caseItem.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <CaseModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        caseData={selectedCase}
      />
    </div>
  );
};

export default CasesPage;
