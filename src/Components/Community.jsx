const Community = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Community Discussions</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <a href="/community/post/1" className="text-blue-500">
            How to deal with anxiety?
          </a>
        </li>
        <li>
          <a href="/community/post/2" className="text-blue-500">
            Best practices for a healthy mind
          </a>
        </li>
        <li>
          <a href="/community/post/3" className="text-blue-500">
            Techniques to improve focus
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Community;
