export const translations = {

    title: {
      en: "University Enrollment Dashboard",
      fr: "Tableau des inscriptions universitaires"
    },

    lineChartTitle: {
      en: "Enrollment Growth Over Time",
      fr: "Croissance des inscriptions dans le temps"
    },

    barChartTitle: {
      en: "University Enrollment Comparison",
      fr: "Comparaison des inscriptions universitaires"
    },

    selectUniversity: {
      en: "Select University:",
      fr: "Sélectionnez une université :"
    },

    selectYear: {
      en: "Select Academic Year:",
      fr: "Sélectionnez l'année scolaire :"
    },
  
    barChartLabel: (year, lang) =>
      lang === "en" ? `Enrollment in ${year}` : `Inscriptions en ${year}`,
  
    universityFullNames: {
      uOttawa: {
        en: "University of Ottawa",
        fr: "Université d'Ottawa"
      },
      Carleton: {
        en: "Carleton University",
        fr: "Université Carleton"
      },
      UofT: {
        en: "University of Toronto",
        fr: "Université de Toronto"
      },
      Queens: {
        en: "Queen's University",
        fr: "Université Queen’s"
      },
      Waterloo: {
        en: "University of Waterloo",
        fr: "Université de Waterloo"
      }
    },
    
    footerText: {
        en: "© 2025 University Enrollment Dashboard",
        fr: "© 2025 Tableau de bord des inscriptions universitaires"
      }
  };

  