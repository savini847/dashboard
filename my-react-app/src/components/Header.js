import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import { translations } from './Translations';

export default function Header({ selectedLanguage, setSelectedLanguage }) {
  const location = useLocation();

  // Helper to check if current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <header className="d-flex align-items-center justify-content-center position-relative mb-4 mt-4">
      <h1 className="m-0 text-center w-100">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {translations.title[selectedLanguage]}
        </Link>
      </h1>

      <nav className="position-absolute top-50 start-0 translate-middle-y ps-4 d-flex gap-3">
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
      </nav>

      <div className="position-absolute top-0 end-0 pe-5 pt-2">
        <LanguageToggle selectedLanguage={selectedLanguage} onChange={setSelectedLanguage} />
      </div>
    </header>
  );
}
