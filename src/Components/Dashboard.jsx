import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Dashboard() {
  const stepsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Steps per day",
        data: [5000, 6500, 7000, 6000, 7200, 8000, 7500],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pulseRateData = {
    labels: ["6 AM", "12 PM", "6 PM", "12 AM"],
    datasets: [
      {
        label: "Average Pulse Rate",
        data: [70, 75, 72, 78],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const heartbeatData = {
    labels: ["6 AM", "12 PM", "6 PM", "12 AM"],
    datasets: [
      {
        label: "Average Heartbeat",
        data: [60, 65, 63, 70],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Daily Steps</h3>
        <Line data={stepsData} />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Average Pulse Rate</h3>
        <Line data={pulseRateData} />
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Average Heartbeat</h3>
        <Line data={heartbeatData} />
      </div>
    </div>
  );
}

export default Dashboard;
