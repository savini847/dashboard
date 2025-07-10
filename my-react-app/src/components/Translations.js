export const translations = {


  //titles
    title: {
      en: "University Enrollment Dashboard",
      fr: "Tableau des inscriptions universitaires"
    },

    lineChartTitle: {
      en: "Enrollment Growth Over Time",
      fr: "Croissance des inscriptions dans le temps"
    },

    barChartTitle: {
      en: "University Enrollment Per Year",
      fr: "Comparaison des inscriptions universitaires"
    },

    //dropdown titles
    selectUniversity: {
      en: "Select University:",
      fr: "Sélectionnez une université :"
    },

    selectYear: {
      en: "Select Academic Year:",
      fr: "Sélectionnez l'année scolaire :"
    },

    //homepage components

    siteName: {
      en: 'University Enrollment',
      fr: "Inscription Universitaire",
    },
  
    nav: {
      home: { en: 'Home', fr: 'Accueil' },
      lineChart: { en: 'Line Chart', fr: 'Graphique Linéaire' },
      barChart: { en: 'Bar Chart', fr: 'Graphique à Barres' },
    },
  
    homepage: {
      title: {
        en: 'Welcome to the University Enrollment Dashboard',
        fr: "Bienvenue au Tableau de Bord d'Inscription Universitaire"
      },
      subtitle: {
        en: 'Select a graph to view enrollment data.',
        fr: "Sélectionnez un graphique pour voir les données d'inscription."
      },
      lineChartButton: {
        en: 'View Line Chart',
        fr: 'Voir le Graphique Linéaire'
      },
      barChartButton: {
        en: 'View Bar Chart',
        fr: 'Voir le Graphique à Barres'
      }
    },
  
    //bar chart label
    barChartLabel: (year, lang) =>
      lang === "en" ? `Enrollment in ${year}` : `Inscriptions en ${year}`,
  
  
    //university names
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

    //footer translation
    footerText: {
        en: "© 2025 University Enrollment Dashboard",
        fr: "© 2025 Tableau de bord des inscriptions universitaires"
      },

    //university filter text
    helperText: {
      selectUniversities: {
        en: "Select universities to view enrollment data.",
        fr: "Sélectionnez les universités pour voir les données d'inscription."
      },
      clearFiltersInfo: {
        en: "Click to reset all selected universities.",
        fr: "Cliquez pour réinitialiser toutes les universités sélectionnées."
      },
      clearFiltersButton: {
        en: "Clear All Filters",
        fr: "Effacer les filtres"
      },

      //year slider text
      selectYearSlider: {
        en: "Slide to select a school year",
        fr: "Faites glisser pour sélectionner une année scolaire"
      },
      pickChartColor: {
        en: "Select a Color",
        fr: "Choisir une couleur"
      },
      schoolYearLabel: {
        en: "School year:",
        fr: "Année scolaire :"
      },

      //homepage

      homepage: {
        selectGraph: {
          en: "Select a graph!",
          fr: "Sélectionnez un graphique !"
        },
        lineGraphCard: {
          en: "Line Chart",
          fr: "Graphique en lignes"
        },
        barGraphCard: {
          en: "Bar Chart",
          fr: "Graphique à barres"
        }
      }

    }
  };

  