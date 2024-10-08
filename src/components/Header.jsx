import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define active class with border-b based on current path
  const isActive = (path) => {
    return location.pathname === path
      ? "border-b-2 border-green-500 text-green-700 font-semibold"
      : "text-[#2E6982]";
  };

  return (
    <header className="p-4 bg-white shadow-md">
      <div className="container flex justify-between relative items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="NGA Logo"
            className="h-16 w-16 md:h-14 md:w-14 xl:h-20 xl:w-20 mr-2"
          />
          <span className="text-yellow-400 text-lg md:text-xl xl:text-2xl font-semibold">
            NGA Publications
          </span>
          <span className="text-[#2E6982] absolute top-8 left-16 ml-2 md:top-8 md:left-14 xl:top-12 xl:left-20 font-thin py-1 md:py-0 xl:py-0">
            Your Name Our Products
          </span>
        </div>

        {/* Navigation for larger screens (hidden on tablet and below) */}
        <nav className="hidden xl:flex space-x-4 xl:space-x-8 font-semibold text-sm xl:text-lg">
          <Link
            to="/"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/neet"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/neet"
            )}`}
          >
            NEET-UG
          </Link>
          <Link
            to="/jee"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/jee"
            )}`}
          >
            JEE-MAINS
          </Link>
          <Link
            to="/kcet"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/kcet"
            )}`}
          >
            KCET
          </Link>
          <Link
            to="/foundation"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/foundation"
            )}`}
          >
            Foundation (6 - 10)
          </Link>
          <Link
            to="/blogs"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/blogs"
            )}`}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/about"
            )}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-green-800 transition duration-300 ${isActive(
              "/contact"
            )}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger for mobile and tablet screens */}
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      <div
        className={`xl:hidden bg-white border-t border-green-100 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="space-y-2 py-2 px-4 text-sm">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/neet"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/neet"
            )}`}
          >
            NEET-UG
          </Link>
          <Link
            to="/jee"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/jee"
            )}`}
          >
            JEE-MAINS
          </Link>
          <Link
            to="/kcet"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/kcet"
            )}`}
          >
            KCET
          </Link>
          <Link
            to="/foundation"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/foundation"
            )}`}
          >
            Foundation (6 - 10)
          </Link>
          <Link
            to="/blogs"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/blogs"
            )}`}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/about"
            )}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className={`block hover:text-green-500 transition duration-300 ${isActive(
              "/contact"
            )}`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
