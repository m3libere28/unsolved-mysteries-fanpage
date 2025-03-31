import React, { useState, useEffect, useRef } from 'react';
import './EvidenceBoardSection.css';
import { cases } from '../data/cases';

const EvidenceBoardSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [evidenceItems, setEvidenceItems] = useState([]);
  const [connections, setConnections] = useState([]);
  const [connecting, setConnecting] = useState(null);
  const boardRef = useRef(null);

  useEffect(() => {
    if (selectedCase) {
      // Generate evidence items from case data
      const items = [
        { id: 1, type: 'location', content: selectedCase.location },
        { id: 2, type: 'date', content: `Year: ${selectedCase.year}` },
        { id: 3, type: 'status', content: `Status: ${selectedCase.status}` },
        { id: 4, type: 'summary', content: selectedCase.summary },
        ...selectedCase.keyFacts.map((fact, index) => ({
          id: 5 + index,
          type: 'clue',
          content: fact
        }))
      ].filter(item => item.content && !item.content.includes('undefined'));

      setEvidenceItems(items);
      setConnections([]);
    }
  }, [selectedCase]);

  const handleItemClick = (itemId) => {
    if (connecting) {
      if (connecting !== itemId) {
        // Create new connection
        setConnections([...connections, {
          from: connecting,
          to: itemId,
          id: `${connecting}-${itemId}`
        }]);
      }
      setConnecting(null);
    } else {
      setConnecting(itemId);
    }
  };

  const handleClearBoard = () => {
    setConnections([]);
    setConnecting(null);
  };

  const renderConnections = () => {
    if (!boardRef.current) return null;

    return connections.map(connection => {
      const fromElement = document.getElementById(`evidence-${connection.from}`);
      const toElement = document.getElementById(`evidence-${connection.to}`);

      if (!fromElement || !toElement) return null;

      const fromRect = fromElement.getBoundingClientRect();
      const toRect = toElement.getBoundingClientRect();
      const boardRect = boardRef.current.getBoundingClientRect();

      const from = {
        x: fromRect.left + fromRect.width / 2 - boardRect.left,
        y: fromRect.top + fromRect.height / 2 - boardRect.top
      };

      const to = {
        x: toRect.left + toRect.width / 2 - boardRect.left,
        y: toRect.top + toRect.height / 2 - boardRect.top
      };

      return (
        <svg
          key={connection.id}
          className="evidence-connection"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <line
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="#ff0000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      );
    });
  };

  return (
    <section id="evidence" className="evidence-board">
      <h2>Evidence Board</h2>
      <p className="evidence-board__subtitle">Connect the dots. Uncover the truth.</p>

      <div className="evidence-board__case-select">
        <select 
          value={selectedCase?.id || ''} 
          onChange={(e) => {
            const selected = cases.find(c => c.id === Number(e.target.value));
            setSelectedCase(selected);
          }}
        >
          <option value="">Select a case to investigate</option>
          {cases.map(case_ => (
            <option key={case_.id} value={case_.id}>
              {case_.title}
            </option>
          ))}
        </select>
      </div>

      {selectedCase && (
        <>
          <div className="evidence-board__controls">
            <button 
              className="evidence-board__clear" 
              onClick={handleClearBoard}
            >
              Clear Connections
            </button>
            <div className="evidence-board__instructions">
              Click two pieces of evidence to connect them
            </div>
          </div>

          <div className="evidence-board__workspace" ref={boardRef}>
            {evidenceItems.map(item => (
              <div
                key={item.id}
                id={`evidence-${item.id}`}
                className={`evidence-item evidence-item--${item.type} ${
                  connecting === item.id ? 'evidence-item--connecting' : ''
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.content}
              </div>
            ))}
            {renderConnections()}
          </div>
        </>
      )}
    </section>
  );
};

export default EvidenceBoardSection;
