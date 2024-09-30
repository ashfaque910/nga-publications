import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import necessary components from React Router
import logo from "../assets/logo-1.png";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location from React Router

  // Toggle the mobile menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="p-4 text-green-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <img src={logo} alt="NGA Logo" className="h-12 w-20 md:h-14 md:w-22 lg:h-16 lg:w-24 mr-4" />
          <span className="text-yellow-400 text-lg md:text-xl lg:text-2xl font-semibold">NGA Publications</span>
        </div>

        {/* Navigation Section (Hidden on mobile, visible on medium to large screens) */}
        <nav className="hidden md:flex space-x-2 lg:space-x-6 font-bold text-sm md:text-sm lg:text-lg">
          <Link to="/" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/neet" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/neet')}`}>
            NEET | UG
          </Link>
          <Link to="/jee" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/jee')}`}>
            JEE | MAINS
          </Link>
          <Link to="/kcet" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/kcet')}`}>
            KCET
          </Link>
          <Link to="/foundation" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/foundation')}`}>
            Foundation (6 - 10)
          </Link>
          <Link to="/blogs" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/blogs')}`}>
            Blogs
          </Link>
          <Link to="/about" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/about')}`}>
            About Us
          </Link>
          <Link to="/contact" className={`text-[#2E6982] hover:text-green-800 transition duration-300 ${isActive('/contact')}`}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Icon (Visible on smaller screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Visible when open on small screens) */}
      <div className={`md:hidden bg-white border-t border-green-100 ${menuOpen ? 'block' : 'hidden'}`}>
        <nav className="space-y-2 py-2 px-4 text-sm">
          <Link to="/" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/neet" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/neet')}`}>
            NEET | UG
          </Link>
          <Link to="/jee" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/jee')}`}>
            JEE | MAINS
          </Link>
          <Link to="/kcet" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/kcet')}`}>
            KCET
          </Link>
          <Link to="/foundation" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/foundation')}`}>
            Foundation (6 - 10)
          </Link>
          <Link to="/blogs" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/blogs')}`}>
            Blogs
          </Link>
          <Link to="/about" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/about')}`}>
            About Us
          </Link>
          <Link to="/contact" onClick={toggleMenu} className={`block text-green-900 hover:text-green-500 transition duration-300 ${isActive('/contact')}`}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
