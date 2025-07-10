import React from 'react';

export default function LanguageToggle({ selectedLanguage, onChange }) {
  return (
    <div className="btn-group">
      <button
        type="button"
        className={`btn btn-outline-primary ${selectedLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onChange('en')}
      >
        English
      </button>
      <button
        type="button"
        className={`btn btn-outline-primary ${selectedLanguage === 'fr' ? 'active' : ''}`}
        onClick={() => onChange('fr')}
      >
        Français
      </button>
    </div>
  );
}
