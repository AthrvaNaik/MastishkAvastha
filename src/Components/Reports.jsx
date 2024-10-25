const Reports = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2">Weekly Summary</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
          Average daily steps: <span className="font-semibold">9,000</span>
        </li>
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
          Average pulse rate: <span className="font-semibold">72 BPM</span>
        </li>
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
          Average heartbeat: <span className="font-semibold">70 BPM</span>
        </li>
        <li className="flex items-center">
          <span className="inline-block w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
          Mental health score (from quizzes): <span className="font-semibold">85%</span>
        </li>
      </ul>
    </div>
  );
};

export default Reports;
