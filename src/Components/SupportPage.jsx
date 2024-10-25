import AIChatbot from "./AIChatbot";
import Resource from "./Resource";
import Community from "./Community";

const SupportPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">Support & Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <AIChatbot />
        </div>

        <div className="bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <Resource />
        </div>

        <div className="bg-white shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <Community />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
