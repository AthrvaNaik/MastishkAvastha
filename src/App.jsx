import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
import ProfilePage from "./Components/ProfilePage";
import SupportPage from "./Components/SupportPage";
import Questions from "./Components/Questions";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
