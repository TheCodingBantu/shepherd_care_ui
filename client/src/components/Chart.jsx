import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
        display:false,
      position: 'bottom',
    },
    title: {
      display: false,
      text: '',
    },
  },
  scales: {
 

    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    
    {
      label: '',
      data: [650, 590, 800, 810, 560, 550, 400,500,300,290,390,400],
      backgroundColor: 'rgba(20, 122, 214, 1)',
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}