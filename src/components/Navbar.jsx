import React from "react";
import { NavLink } from "react-router-dom";
import freelanceLogo from "../assets/freelance_logo.svg";

const Navbar = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-green-600 border-b border-green-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto decoration-red-600"
                src={freelanceLogo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Freelancer Services
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
                <NavLink to="/services" className={activeLink}>
                  Services
                </NavLink>
                <NavLink to="/add-service" className={activeLink}>
                  Add Service
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
