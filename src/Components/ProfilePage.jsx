import Dashboard from './Dashboard';
import MentalState from './MentalState';
import Reports from './Reports';

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Profile Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mental State */}
        <div className="col-span-1 md:col-span-3">
          <MentalState />
        </div>

        {/* Dashboard Section */}
        <div className="col-span-1 md:col-span-3 bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <Dashboard />
        </div>

        {/* Report Section */}
        <div className="col-span-1 md:col-span-3 bg-white p-6 shadow-lg rounded-lg transition-transform duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Reports</h2>
          <Reports />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
