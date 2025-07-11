import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { translations } from './Translations';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ universities, data, year, years, language, fullNames, selectedColor }) {
  const yearIndex = years.indexOf(year);
  const values = universities.map((uni) => data[uni][yearIndex]);

  const chartData = {
    labels: universities.map((uni) => fullNames[uni][language]),
    datasets: [
      {
        label: translations.barChartLabel(year, language),
        data: values,
        backgroundColor: selectedColor
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          textDecoration: 'none',
          cursor: 'default',
        },
        onClick: null
      },
      title: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => val.toLocaleString()
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
}
