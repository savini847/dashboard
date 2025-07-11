import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { translations } from './Translations';

export default function Header({ selectedLanguage, setSelectedLanguage }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="border-bottom py-3">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          
          <div className="d-flex gap-2 mb-2 mb-md-0">
            <Link
              to="/line-dashboard"
              className={`btn btn-sm ${isActive('/line-dashboard') ? 'btn-primary' : 'btn-outline-primary'}`}
            >
              {translations.helperText.homepage.lineGraphCard[selectedLanguage]}
            </Link>
            <Link
              to="/bar-dashboard"
              className={`btn btn-sm ${isActive('/bar-dashboard') ? 'btn-primary' : 'btn-outline-primary'}`}
            >
              {translations.helperText.homepage.barGraphCard[selectedLanguage]}
            </Link>
          </div>

          <h1 className="text-center flex-grow-1 m-0">
            <Link to="/" className="text-decoration-none text-dark">
              {translations.title[selectedLanguage]}
            </Link>
          </h1>

          <div className="d-flex justify-content-end ms-md-3">
            <LanguageToggle
              selectedLanguage={selectedLanguage}
              onChange={setSelectedLanguage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
