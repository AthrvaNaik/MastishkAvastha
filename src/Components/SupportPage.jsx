import AIChatbot from "./AIChatbot";
import Resource from "./Resource";
import Community from "./Community";

const SupportPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Support & Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="bg-white shadow-md p-6 rounded-lg">
          <AIChatbot />
        </div>

        
        <div className="bg-white shadow-md p-6 rounded-lg">
          <Resource />
        </div>

        
        <div className="bg-white shadow-md p-6 rounded-lg">
          <Community />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
