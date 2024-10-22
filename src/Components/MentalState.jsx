// MentalState.jsx
const MentalState = () => {
  // For now, we'll use hardcoded values
  const mentalState = "Calm"; // You can update this dynamically based on user input or activity data

  return (
    <div className="bg-blue-500 text-white rounded-lg p-4 shadow-md text-center">
      <h2 className="text-3xl font-semibold">Mental State Today</h2>
      <p className="text-4xl mt-2">{mentalState}</p>
    </div>
  );
};

export default MentalState;
