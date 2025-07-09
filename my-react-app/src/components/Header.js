import React from 'react';
import LanguageToggle from './LanguageToggle';
import { translations } from './Translations';

export default function Header({ selectedLanguage, setSelectedLanguage }) {
  return (
    <header className="d-flex align-items-center justify-content-center position-relative mb-4 mt-4">
      <h1 className="m-0 text-center w-100">{translations.title[selectedLanguage]}</h1>
      <div className="position-absolute top-0 end-0 pe-5 pt-2">
        <LanguageToggle selectedLanguage={selectedLanguage} onChange={setSelectedLanguage} />
      </div>
    </header>
  );
}
