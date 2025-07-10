import React, { useState } from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import UniversityFilter from './UniversityFilter';
import YearSlider from './YearSlider';
import { years, enrollmentData, universityNames } from './Dataset';
import { translations } from './Translations';

export default function Dashboard({ selectedLanguage }) {
  const [selectedUniversities, setSelectedUniversities] = useState(['uOttawa']);
  const [selectedYearIndex, setSelectedYearIndex] = useState(years.length - 1);
  const [selectedColor, setSelectedColor] = useState('#ff6384'); // default pink
  const fullNames = translations.universityFullNames;

  return (
    <>
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
          selectedColor={selectedColor}
        />
      </section>

      <section className="mb-5">
        <h2>{translations.barChartTitle[selectedLanguage]}</h2>

        <section className="mb-4 text-center">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <label
              htmlFor="colorPicker"
              className="form-label m-0"
            >
              {translations.helperText.pickChartColor[selectedLanguage]}
            </label>
            <input
              type="color"
              id="colorPicker"
              className="form-control form-control-color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              title={translations.helperText.pickChartColor[selectedLanguage]}
            />
          </div>
        </section>

        <YearSlider
          min={0}
          max={years.length - 1}
          value={selectedYearIndex}
          onChange={setSelectedYearIndex}
          years={years}
          language={selectedLanguage}
        />

        <BarChart
          universities={universityNames}
          data={enrollmentData}
          year={years[selectedYearIndex]}
          years={years}
          language={selectedLanguage}
          fullNames={fullNames}
          selectedColor={selectedColor}
        />
      </section>
    </>
  );
}
