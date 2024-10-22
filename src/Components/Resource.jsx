
const Resource = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Mental Health Resources</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <a href="https://example.com" className="text-blue-500">
            Meditation Techniques
          </a>
        </li>
        <li>
          <a href="https://example.com" className="text-blue-500">
            Managing Stress
          </a>
        </li>
        <li>
          <a href="https://example.com" className="text-blue-500">
            Breathing Exercises for Relaxation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resource;
