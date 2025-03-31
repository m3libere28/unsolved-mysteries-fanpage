import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { cases } from '../data/cases';
import './StatisticsSection.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const StatisticsSection = () => {
  // Process cases by decade
  const decadeData = cases.reduce((acc, c) => {
    const decade = Math.floor(c.year / 10) * 10;
    acc[decade] = (acc[decade] || 0) + 1;
    return acc;
  }, {});

  // Process cases by status
  const statusData = cases.reduce((acc, c) => {
    acc[c.status] = (acc[c.status] || 0) + 1;
    return acc;
  }, {});

  // Process cases by type (based on tags)
  const typeData = cases.reduce((acc, c) => {
    c.tags.forEach(tag => {
      if (!['1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s'].includes(tag)) {
        acc[tag] = (acc[tag] || 0) + 1;
      }
    });
    return acc;
  }, {});

  const decadeChartData = {
    labels: Object.keys(decadeData).sort(),
    datasets: [{
      label: 'Cases by Decade',
      data: Object.keys(decadeData).sort().map(decade => decadeData[decade]),
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 1,
      barPercentage: 0.8,
      categoryPercentage: 0.9
    }]
  };

  const statusChartData = {
    labels: Object.keys(statusData),
    datasets: [{
      data: Object.values(statusData),
      backgroundColor: [
        'rgba(255, 0, 0, 0.8)',
        'rgba(255, 165, 0, 0.8)',
        'rgba(128, 128, 128, 0.8)'
      ],
      borderColor: [
        'rgba(255, 0, 0, 1)',
        'rgba(255, 165, 0, 1)',
        'rgba(128, 128, 128, 1)'
      ],
      borderWidth: 2,
      hoverOffset: 4
    }]
  };

  const typeChartData = {
    labels: Object.keys(typeData),
    datasets: [{
      label: 'Cases by Type',
      data: Object.values(typeData),
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 0, 0, 1)',
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: {
            family: "'Courier New', monospace",
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: "'Courier New', monospace",
          size: 14
        },
        bodyFont: {
          family: "'Courier New', monospace",
          size: 12
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            family: "'Courier New', monospace"
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#ffffff',
          font: {
            family: "'Courier New', monospace"
          }
        }
      }
    }
  };

  const doughnutOptions = {
    ...chartOptions,
    cutout: '70%',
    plugins: {
      ...chartOptions.plugins,
      legend: {
        ...chartOptions.plugins.legend,
        position: 'bottom'
      }
    }
  };

  return (
    <section className="statistics" id="statistics">
      <div className="statistics__header">
        <h2>CASE ANALYTICS</h2>
        <div className="statistics__line"></div>
        <p>Exploring patterns in the unexplained</p>
      </div>

      <div className="statistics__grid">
        <div className="statistics__card">
          <h3>Timeline Distribution</h3>
          <div className="statistics__chart">
            <Bar data={decadeChartData} options={chartOptions} />
          </div>
          <p className="statistics__insight">
            Peak decade: {Object.entries(decadeData).sort(([,a], [,b]) => b - a)[0][0]}s
          </p>
        </div>

        <div className="statistics__card">
          <h3>Case Status</h3>
          <div className="statistics__chart statistics__chart--doughnut">
            <Doughnut data={statusChartData} options={doughnutOptions} />
          </div>
          <p className="statistics__insight">
            {Object.entries(statusData).sort(([,a], [,b]) => b - a)[0][0]}: Most common status
          </p>
        </div>

        <div className="statistics__card">
          <h3>Mystery Categories</h3>
          <div className="statistics__chart">
            <Line data={typeChartData} options={chartOptions} />
          </div>
          <p className="statistics__insight">
            Top category: {Object.entries(typeData).sort(([,a], [,b]) => b - a)[0][0]}
          </p>
        </div>
      </div>

      <div className="statistics__summary">
        <div className="statistics__fact">
          <span className="statistics__fact-number">{cases.length}</span>
          <span className="statistics__fact-label">Total Cases</span>
        </div>
        <div className="statistics__fact">
          <span className="statistics__fact-number">{Object.keys(typeData).length}</span>
          <span className="statistics__fact-label">Categories</span>
        </div>
        <div className="statistics__fact">
          <span className="statistics__fact-number">
            {Math.max(...cases.map(c => c.year)) - Math.min(...cases.map(c => c.year))}
          </span>
          <span className="statistics__fact-label">Year Span</span>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
