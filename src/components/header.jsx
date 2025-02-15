import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-6 flex gap-8 justify-end items-center shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative px-4 py-2 text-lg transition-all duration-300 ${
            isActive
              ? "text-blue-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
              : "text-gray-500 hover:text-blue-600"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          `relative px-4 py-2 text-lg transition-all duration-300 ${
            isActive
              ? "text-blue-600 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-600"
              : "text-gray-500 hover:text-blue-600"
          }`
        }
      >
        History
      </NavLink>
    </nav>
  );
};

export default Header;
