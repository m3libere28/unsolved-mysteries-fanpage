import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import './CaseMap.css';

const CaseMap = ({ cases }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const heatLayerRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([40, -95], 4);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(mapInstanceRef.current);
    }

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add glowing markers for each case
    cases.forEach(caseItem => {
      const coords = getCoordinatesFromLocation(caseItem.location);
      if (coords) {
        const pulsingIcon = L.divIcon({
          className: 'custom-marker',
          html: '<div class="marker-pulse"></div><div class="marker-inner"></div>',
          iconSize: [20, 20],
        });

        const marker = L.marker(coords, { icon: pulsingIcon })
          .addTo(mapInstanceRef.current)
          .bindPopup(`
            <div class="custom-popup">
              <h3>${caseItem.title}</h3>
              <p><strong>Year:</strong> ${caseItem.year}</p>
              <p><strong>Location:</strong> ${caseItem.location}</p>
              <p>${caseItem.summary}</p>
            </div>
          `, {
            className: 'custom-popup-content'
          });

        markersRef.current.push(marker);
      }
    });

    // Convert cases to heatmap points
    const points = cases
      .filter(caseItem => {
        const coords = getCoordinatesFromLocation(caseItem.location);
        return coords !== null;
      })
      .map(caseItem => {
        const coords = getCoordinatesFromLocation(caseItem.location);
        const intensity = Math.max(0.3, 1 - (new Date().getFullYear() - caseItem.year) / 100);
        return [coords[0], coords[1], intensity];
      });

    if (heatLayerRef.current) {
      mapInstanceRef.current.removeLayer(heatLayerRef.current);
    }

    heatLayerRef.current = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: {
        0.2: '#0000ff',
        0.4: '#00ff00',
        0.6: '#ffff00',
        0.8: '#ff0000',
        1.0: '#ffffff'
      }
    }).addTo(mapInstanceRef.current);

    let opacity = 0.4;
    let increasing = true;

    const animate = () => {
      if (increasing) {
        opacity += 0.01;
        if (opacity >= 0.8) increasing = false;
      } else {
        opacity -= 0.01;
        if (opacity <= 0.4) increasing = true;
      }

      if (heatLayerRef.current) {
        heatLayerRef.current.setOptions({ maxZoom: 10, opacity });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [cases]);

  const getCoordinatesFromLocation = (location) => {
    const coordinateMap = {
      'Los Angeles, CA': [34.0522, -118.2437],
      'Pacific Northwest': [47.7511, -120.7401],
      'Northern California': [38.8026, -120.5233],
      'Bavaria, Germany': [48.7904, 11.4979],
      'Ural Mountains, Russia': [60.0, 60.0],
      'Chicago, Illinois': [41.8781, -87.6298],
      'Outer Hebrides, Scotland': [57.6048, -7.3297]
    };

    const key = Object.keys(coordinateMap).find(k => 
      location.toLowerCase().includes(k.toLowerCase())
    );

    return key ? coordinateMap[key] : null;
  };

  return (
    <div className="case-map-container">
      <div className="case-map" ref={mapRef}></div>
      <div className="map-overlay">
        <h2>Case Locations</h2>
        <p>Interactive map showing mysterious cases worldwide</p>
        <div className="map-legend">
          <div className="legend-item">
            <span className="legend-color" style={{ background: 'linear-gradient(to right, #0000ff, #00ff00, #ffff00, #ff0000, #ffffff)' }}></span>
            <span className="legend-label">Case Intensity</span>
          </div>
          <div className="legend-item">
            <span className="legend-marker">
              <div className="marker-pulse"></div>
              <div className="marker-inner"></div>
            </span>
            <span className="legend-label">Case Location</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseMap;
