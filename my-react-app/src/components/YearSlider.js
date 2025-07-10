import React from 'react';
import { translations } from './Translations';

export default function YearSlider({ min, max, value, onChange, years, language }) {
  return (
    <div className="mb-4">
      <small className="form-text text-muted mb-1">
        {translations.helperText.selectYearSlider[language]}
      </small>

      <input
        type="range"
        className="form-range"
        id="yearRange"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        step={1}
        list="year-ticks"
      />

      <datalist id="year-ticks">
        {years.map((year, index) => (
          <option key={year} value={index} label={year} />
        ))}
      </datalist>

      <p className="h6 mt-2">
        <strong>{translations.helperText.schoolYearLabel[language]}</strong> {years[value]}
      </p>
    </div>
  );
}
