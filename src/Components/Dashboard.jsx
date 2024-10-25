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
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const weeklySteps = [7000, 8000, 6500, 9000, 8500, 9200, 8700];

  // Data for Pulse Rate
  const pulseRateData = {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Pulse Rate',
        data: [70, 72, 68, 75, 73, 70],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Data for Heart Rate
  const heartRateData = {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Heart Rate',
        data: [65, 67, 64, 70, 68, 66],
        borderColor: '#fb7185',
        backgroundColor: 'rgba(251, 113, 133, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

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

  // Mental health metrics
  const moodData = {
    labels: ['Happy', 'Neutral', 'Sad'],
    datasets: [
      {
        label: 'Mood Distribution',
        data: [60, 30, 10],
        backgroundColor: ['#34d399', '#fbbf24', '#fb7185'],
        hoverBackgroundColor: ['#10b981', '#f59e0b', '#ec4899'],
      },
    ],
  };

  const stressLevelData = {
    labels: ['Low', 'Moderate', 'High'],
    datasets: [
      {
        label: 'Stress Levels',
        data: [50, 30, 20],
        backgroundColor: ['#38bdf8', '#fbbf24', '#fb7185'],
        hoverBackgroundColor: ['#0ea5e9', '#f59e0b', '#ec4899'],
      },
    ],
  };

  // New Metric for Daily Water Intake
  const dailyWaterIntake = 2.5; // in liters
  const recommendedWaterIntake = 3; // in liters

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Health Metrics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Steps Over Last Week</h3>
          <p className="text-5xl font-bold text-gray-800">{weeklySteps.reduce((a, b) => a + b, 0)}</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Daily Water Intake</h3>
          <p className="text-5xl font-bold text-gray-800">{dailyWaterIntake} L</p>
          <p className="text-gray-600">Recommended: {recommendedWaterIntake} L</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Pulse Rate</h3>
          <Line data={pulseRateData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: '#e5e7eb',
                },
              },
            },
          }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Heart Rate</h3>
          <Line data={heartRateData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: '#e5e7eb',
                },
              },
            },
          }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Today&apos;s Health Metrics Overview</h3>
          <Doughnut data={groupData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.label}: ${context.raw}`,
                },
              },
            },
          }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Stress Levels</h3>
          <Doughnut data={stressLevelData} options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.label}: ${context.raw}`,
                },
              },
            },
          }} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
