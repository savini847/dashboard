import React from 'react';
import { Link } from 'react-router-dom';
import { translations } from './Translations';
import '../App.css';

export default function Homepage({ selectedLanguage }) {
  return (
    <div className="homepage-container d-flex flex-column align-items-center justify-content-start" style={{ minHeight: '80vh', paddingTop: '2rem' }}>
      <h2 className="mb-5">
        {translations.helperText.homepage.selectGraph[selectedLanguage]}
      </h2>

      <div className="d-flex gap-5 justify-content-center flex-wrap">
        {/* Line Graph Card */}
        <Link to="/line-dashboard" className="graph-card text-decoration-none text-center">
          <div className="card-text mb-2 fs-4 fw-semibold">
            {translations.helperText.homepage.lineGraphCard[selectedLanguage]}
          </div>
          <div className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
            {translations.lineChartTitle[selectedLanguage]}
          </div>
          <img src="/line.png" alt="Line Chart" className="card-image" />
        </Link>

        {/* Bar Graph Card */}
        <Link to="/bar-dashboard" className="graph-card text-decoration-none text-center">
          <div className="card-text mb-2 fs-4 fw-semibold">
            {translations.helperText.homepage.barGraphCard[selectedLanguage]}
          </div>
          <div className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
            {translations.barChartTitle[selectedLanguage]}
          </div>
          <img src="/bar.png" alt="Bar Chart" className="card-image" />
        </Link>
      </div>
    </div>
  );
}
