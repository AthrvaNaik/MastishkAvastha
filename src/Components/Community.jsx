import { FaComments, FaLightbulb, FaBrain } from "react-icons/fa";

const Community = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-purple-50 shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Community Discussions</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li className="flex items-center">
          <FaComments className="text-blue-500 mr-2" />
          <a 
            href="/community/post/1" 
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            How to deal with anxiety?
          </a>
        </li>
        <li className="flex items-center">
          <FaLightbulb className="text-yellow-500 mr-2" />
          <a 
            href="/community/post/2" 
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Best practices for a healthy mind
          </a>
        </li>
        <li className="flex items-center">
          <FaBrain className="text-green-500 mr-2" />
          <a 
            href="/community/post/3" 
            className="text-blue-500 hover:text-blue-700 transition duration-300"
          >
            Techniques to improve focus
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Community;
