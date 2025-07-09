import React from 'react';
import { Button } from 'react-bootstrap';

const LanguageToggle = ({ language, setLanguage }) => {
  return (
    <Button variant="outline-primary" size="sm" onClick={() => setLanguage(prev => prev === 'en' ? 'fr' : 'en')}>
      {language === 'en' ? 'Français' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
