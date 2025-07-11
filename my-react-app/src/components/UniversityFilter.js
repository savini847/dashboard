import React from 'react';
import '../App.css'; 
import { universityColors } from './Dataset';
import { translations } from './Translations';

export default function UniversityFilter({
  universities,
  selectedUniversities,
  setSelectedUniversities,
  fullNames,
  language
}) {
  const toggleUniversity = (uni) => {
    if (selectedUniversities.includes(uni)) {
      setSelectedUniversities(selectedUniversities.filter(u => u !== uni));
    } else {
      setSelectedUniversities([...selectedUniversities, uni]);
    }
  };

  const clearFilters = () => {
    setSelectedUniversities([]);
  };

  return (
    <>

      <div className="text-center mb-2 mt-4">
        <small className="form-text text-muted">
          {translations.helperText.selectUniversities[language]}
        </small>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4 mt-2">
        {universities.map((uni) => {
          const selected = selectedUniversities.includes(uni);
          const color = universityColors[uni];

          return (
            <div
              key={uni}
              className="card university-card"
              onClick={() => toggleUniversity(uni)}
              style={{
                borderColor: selected ? color : '#ccc',
                backgroundColor: selected ? color + '22' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = selected ? color + '44' : color + '22';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = selected ? color + '22' : '#fff';
              }}
            >
              <div className="card-body text-center" style={{ color: selected ? '#000' : '#333' }}>
                <img
                  src={`/${uni}.png`}
                  alt={fullNames[uni][language]}
                  className="img-fluid mb-2"
                  style={{ maxHeight: '50px' }}
                />
                <div>{fullNames[uni][language]}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex flex-column align-items-center mb-3 mt-2">
        <button 
          className="btn btn-outline-secondary"
          onClick={clearFilters}
          disabled={selectedUniversities.length === 0}
        >
          {translations.helperText.clearFiltersButton[language]}
        </button>
        <small className="form-text text-muted mt-1">
          {translations.helperText.clearFiltersInfo[language]}
        </small>
      </div>
    </>
  );
}
