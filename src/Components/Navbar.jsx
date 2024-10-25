import { Link } from "react-router-dom";
import { NavElements } from "../Constants/index.js";


function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-md sticky top-0 z-50">
      <ul className="flex justify-around items-center">
        {NavElements.map((navItem) => (
          <li key={navItem.id} className="transition-transform transform hover:scale-105">
            <Link
              to={navItem.path}
              className="text-white text-lg font-semibold hover:text-gray-300 flex items-center space-x-2"
            >
              {navItem.icon && <navItem.icon className="text-xl" />} {/* Optional icon */}
              <span>{navItem.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
