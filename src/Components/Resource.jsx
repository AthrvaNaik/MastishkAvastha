import { FaLeaf, FaRegHeart, FaMedkit } from "react-icons/fa";

const Resource = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Mental Health Resources</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li className="flex items-center">
          <FaLeaf className="text-green-500 mr-2" />
          <a 
            href="https://example.com" 
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Meditation Techniques
          </a>
        </li>
        <li className="flex items-center">
          <FaRegHeart className="text-red-500 mr-2" />
          <a 
            href="https://example.com" 
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Managing Stress
          </a>
        </li>
        <li className="flex items-center">
          <FaMedkit className="text-blue-500 mr-2" />
          <a 
            href="https://example.com" 
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Breathing Exercises for Relaxation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resource;
