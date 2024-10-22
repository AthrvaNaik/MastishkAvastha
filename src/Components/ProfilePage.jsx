// ProfilePage.jsx
import Dashboard from './Dashboard';
import Report from './Report';
import MentalState from './MentalState';

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mental State */}
        <div className="col-span-1 md:col-span-3">
          <MentalState />
        </div>

        {/* Dashboard Section */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 shadow-md rounded-lg">
          <Dashboard />
        </div>

        {/* Report Section */}
        <div className="col-span-1 bg-white p-6 shadow-md rounded-lg">
          <Report />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
