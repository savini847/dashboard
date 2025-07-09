import React from 'react';
import { translations } from './Translations';

export default function Footer({ selectedLanguage }) {
  return (
    <footer className="bg-light text-center py-3 mt-5 border-top">
      <p className="mb-0">
        {translations.footerText[selectedLanguage]}
      </p>
    </footer>
  );
}