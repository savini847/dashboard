import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { universityColors } from './Dataset';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart({
  years,
  data,
  selectedUniversities,
  fullNames,
  language,
}) {
  const datasets = selectedUniversities.map((uni) => ({
    label: fullNames[uni][language],
    data: data[uni],
    borderColor: universityColors[uni],
    backgroundColor: universityColors[uni] + '88',
    tension: 0.3,
    fill: true
  }));

  const chartData = {
    labels: years,
    datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        onClick: () => null, 
        labels: {
          usePointStyle: true,
          font: {
            lineWidth: 0
          }
        }
      },
      title: {
        display: false
      }
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

  return <Line data={chartData} options={options} />;
}
