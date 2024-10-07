import { Link } from "react-router-dom";
import { NavElements } from "../Constants/index.js";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex justify-around">
        {NavElements.map((navItem) => (
          <li key={navItem.id}>
            <Link
              to={navItem.path}
              className="text-white text-lg font-semibold hover:text-gray-300"
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
