import React, { useState } from "react";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Header */}
      <div
        className="bg-blue-200 flex items-center justify-center px-4 md:px-6"
        style={{ height: "60px" }}
      >
        <p className="text-sm text-center md:text-left whitespace-nowrap overflow-hidden truncate">
          Navigate your ideal career path with tailored expert choice
          <span className="ml-2 text-blue-600 font-semibold">
            Contact Expert
          </span>
        </p>
      </div>

      {/* Main Header */}
      <div
        className="bg-white flex items-center justify-between px-4 md:px-6 py-2 md:py-0"
        style={{ height: "80px" }}
      >
        {/* Left Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 md:w-32 h-auto" />
          <button
            className="ml-4 bg-blue-500 rounded-sm hidden md:block"
            style={{
              width: "110px",
              height: "40px",
            }}
          >
            Courses &#x25BC; {/* Down arrow added after "Courses" */}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button */}
          <button className="block md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-700 hover:text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`flex space-x-4 md:flex ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              Refer & Earn
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              Resources
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              About us
            </a>
          </nav>

          {/* Buttons */}
          <Link
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            style={{
              height: "40px",
              width: "77px",
            }}
            
          >
            Login
          </Link>
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600"
            style={{
              height: "40px",
              width: "115px",
            }}
          >
            Try for Free
          </button>
        </div>

        {/* Courses button for mobile */}
        <button
          className="ml-4 bg-blue-500 rounded-sm block md:hidden"
          style={{
            width: "110px",
            height: "40px",
          }}
        >
          Courses
        </button>
      </div>
    </div>
  );
};

export default Header;
