import React from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from './Translations';

export default function Homepage({ language }) {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>{translations.homepage.title[language]}</h1>
      <p>{translations.homepage.subtitle[language]}</p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/line-chart')}
        >
          {translations.homepage.lineChartButton[language]}
        </button>

        <button 
          className="btn btn-secondary"
          onClick={() => navigate('/bar-chart')}
        >
          {translations.homepage.barChartButton[language]}
        </button>
      </div>
    </div>
  );
}
