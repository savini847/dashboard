export const translations = {


  //titles
    title: {
      en: "University Enrolment Dashboard",
      fr: "Tableau de bord des inscriptions universitaires"
    },

    lineChartTitle: {
      en: "Enrolment Growth Per University Over Time",
      fr: "Évolution des inscriptions par université au fil du temps"
    },

    barChartTitle: {
      en: "University Enrolment Per Year",
      fr: "Inscriptions universitaires par année"
    },

    //filter titles
    selectUniversity: {
      en: "Select University:",
      fr: "Sélectionner une université :"
    },

    selectYear: {
      en: "Select Academic Year:",
      fr: "Sélectionner l'année scolaire :"
    },

    //info 
    enrolmentInfo:{
      en: "The data displays the enrolment numbers of full-time Canadian undergraduate students seeking degrees.",
      fr: "Les données présentent le nombre d’inscriptions d’étudiants canadiens de premier cycle à temps plein souhaitant obtenir un diplôme.",
    },

    //homepage components

    siteName: {
      en: 'University Enrollment',
      fr: "Inscriptions universitaires",
    },
  
    nav: {
      home: { en: 'Home', fr: 'Accueil' },
      lineChart: { en: 'Line Chart', fr: 'Graphique Linéaire' },
      barChart: { en: 'Bar Chart', fr: 'Histogramme' },
    },
  
    homepage: {
      title: {
        en: 'Welcome to the University Enrolment Dashboard',
        fr: "Bienvenue sur le tableau de bord des inscriptions universitaires"
      },
      subtitle: {
        en: 'Select a graph to view enrolment data.',
        fr: "Sélectionner un graphique pour visualiser les données d'inscription."
      },
      lineChartButton: {
        en: 'View Line Chart',
        fr: 'Voir le Graphique Linéaire'
      },
      barChartButton: {
        en: 'View Bar Chart',
        fr: "Voir l'histogramme"
      }
    },
  
    //bar chart label
    barChartLabel: (year, lang) =>
      lang === "en" ? `Enrolment in ${year}` : `Inscriptions en ${year}`,
  
  
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
        fr: "Université Queen's"
      },
      Waterloo: {
        en: "University of Waterloo",
        fr: "Université de Waterloo"
      }
    },

    //footer translation
    footerText: {
        en: "© 2025 University Enrolment Dashboard",
        fr: "© 2025 Tableau de bord des inscriptions universitaires"
      },

    //university filter text
    helperText: {
      selectUniversities: {
        en: "Select universities to view enrolment data.",
        fr: "Sélectionnez les universités pour voir les données d'inscription."
      },
      clearFiltersInfo: {
        en: "Click to reset all selected universities.",
        fr: "Cliquez pour réinitialiser toutes les universités sélectionnées."
      },
      clearFiltersButton: {
        en: "Clear All Filters",
        fr: "Effacer tous les filtres"
      },

      //year slider text
      selectYearSlider: {
        en: "Slide to pick a school year",
        fr: "Faites glisser pour choisir une année scolaire"
      },

      pickChartColor: {
        en: "Select a Color",
        fr: "Sélectionner une couleur"
      },

      schoolYearLabel: {
        en: "School year:",
        fr: "Année scolaire :"
      },

      //homepage

      homepage: {
        selectGraph: {
          en: "Pick a graph!",
          fr: "Choisir un graphique !"
        },
        lineGraphCard: {
          en: "Line Chart",
          fr: "Graphique linéaire"
        },
        barGraphCard: {
          en: "Bar Chart",
          fr: "Histogramme"
        }
      }
    }
  };