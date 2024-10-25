import { FaBrain } from 'react-icons/fa'; // Importing a mental health-related icon

const MentalState = () => {
  const mentalState = "Calm"; // You can update this dynamically based on user input or activity data

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-6 shadow-lg text-center transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-semibold mb-2">Mental State Today</h2>
      <FaBrain className="text-5xl mx-auto mb-2" />
      <p className="text-4xl mt-2">{mentalState}</p>
      <p className="text-lg mt-4 italic">Keep up the great work on your mental health!</p>
    </div>
  );
};

export default MentalState;
