import React, { useState } from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { years, enrollmentData, universityNames } from './Dataset';
import { translations } from './Translations';

export default function Dashboard({ selectedLanguage }) {
  const [selectedUniversity, setSelectedUniversity] = useState('uOttawa');
  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);
  const fullNames = translations.universityFullNames;

  return (
    <>
      <section className="mb-5">
        <h2>{translations.lineChartTitle[selectedLanguage]}</h2>
        <label htmlFor="university-select" className="form-label">
          {translations.selectUniversity[selectedLanguage]}
        </label>
        <select
          id="university-select"
          className="form-select mb-3"
          value={selectedUniversity}
          onChange={(e) => setSelectedUniversity(e.target.value)}
        >
          {universityNames.map((key) => (
            <option key={key} value={key}>
              {fullNames[key][selectedLanguage]}
            </option>
          ))}
        </select>
        <LineChart
          years={years}
          data={enrollmentData[selectedUniversity]}
          label={fullNames[selectedUniversity][selectedLanguage]}
        />
      </section>

      <section>
        <h2>{translations.barChartTitle[selectedLanguage]}</h2>
        <label htmlFor="year-select" className="form-label">
          {translations.selectYear[selectedLanguage]}
        </label>
        <select
          id="year-select"
          className="form-select mb-3"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <BarChart
          universities={universityNames}
          data={enrollmentData}
          year={selectedYear}
          years={years}
          language={selectedLanguage}
          fullNames={fullNames}
        />
      </section>
    </>
  );
}
