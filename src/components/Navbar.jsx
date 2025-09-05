import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-pink-600">
            <Link to="/">WebCrafters</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/services" className="text-gray-700 hover:text-pink-600 font-medium">
             Services
            </Link>
            <Link to="/about1" className="text-gray-700 hover:text-pink-600 font-medium">
              About Us
            </Link>
            <Link to="/prices" className="text-gray-700 hover:text-pink-600 font-medium">
              Our Prices
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600 font-medium">
             Contacts
            </Link>
            <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium">
              Home
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
           <a
               href="https://wa.me/27840489731"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-700 transition text-center"
               onClick={toggleMenu}
            >
              Get a Quote
          </a>

          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-pink-600 focus:outline-none text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <Link
              to="/services"
              className="text-gray-700 hover:text-pink-600 font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about1"
              className="text-gray-700 hover:text-pink-600 font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/Prices"
              className="text-gray-700 hover:text-pink-600 font-medium"
              onClick={toggleMenu}
            >
              Prices
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-pink-600 font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium">
              Home
            </Link>
            <a
              href="https://wa.me/27840489731"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-700 transition text-center"
              onClick={toggleMenu}
>
                 Get a Quote
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

