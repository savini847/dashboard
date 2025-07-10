import React, { useState } from 'react';
import LineChart from './LineChart';
import UniversityFilter from './UniversityFilter';
import { years, enrollmentData, universityNames } from './Dataset';
import { translations } from './Translations';

export default function LineDashboard({ selectedLanguage }) {
  const [selectedUniversities, setSelectedUniversities] = useState(['uOttawa']);
  const fullNames = translations.universityFullNames;

  return (
    <section className="mb-5 text-center">
      <h2>{translations.lineChartTitle[selectedLanguage]}</h2>

      <UniversityFilter
        universities={universityNames}
        selectedUniversities={selectedUniversities}
        setSelectedUniversities={setSelectedUniversities}
        fullNames={fullNames}
        language={selectedLanguage}
      />

      <LineChart
        years={years}
        data={enrollmentData}
        selectedUniversities={selectedUniversities}
        fullNames={fullNames}
        language={selectedLanguage}
      />
    </section>
  );
}
