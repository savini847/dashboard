import React, { useState } from 'react';
import Header from './Header';
import FirstChart from './FirstChart';
import SecondChart from './SecondChart';
import { translations } from './Translations';

const Dashboard = () => {
//   const [language, setLanguage] = useState('en');
//   const t = translations[language];

  return (
    <>
      <Header />
{/* 
      <div className="container mt-4">
        <p>{t.description}</p>
        <FirstChart language={language} />
        <SecondChart language={language} />
      </div> */}
    </>
  );
};

export default Dashboard;
