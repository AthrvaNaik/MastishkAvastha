// Dashboard.jsx
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // For the Doughnut chart
} from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Required for Doughnut charts
);

const Dashboard = () => {
  const weeklySteps = [7000, 8000, 6500, 9000, 8500, 9200, 8700]; // Hardcoded values for weekly steps

  // Data for pulse rate and heartbeat graphs
  const pulseRateData = {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Pulse Rate',
        data: [70, 72, 68, 75, 73, 70],
        borderColor: '#38bdf8',
        fill: false,
      },
      {
        label: 'Heart Rate',
        data: [65, 67, 64, 70, 68, 66],
        borderColor: '#fb7185',
        fill: false,
      },
    ],
  };

  // Data for group overview in pie chart
  const groupData = {
    labels: ['Steps', 'Calories', 'Water Intake'],
    datasets: [
      {
        label: 'Health Metrics',
        data: [804, 227, 159],
        backgroundColor: ['#34d399', '#fbbf24', '#f472b6'],
        hoverBackgroundColor: ['#10b981', '#f59e0b', '#ec4899'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Health Metrics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Steps */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Steps Over Last Week</h3>
          <p className="text-4xl font-bold">{weeklySteps.reduce((a, b) => a + b, 0)}</p>
        </div>

        {/* Pulse Rate & Heartbeat */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Line data={pulseRateData} />
        </div>

        {/* Health Metrics Overview */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Doughnut data={groupData} />
        </div>

        {/* Additional Info */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Water Intake</h3>
          <p className="text-4xl font-bold">2.5L</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Sleep Duration</h3>
          <p className="text-4xl font-bold">7h 30m</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
