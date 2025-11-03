import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600 tracking-wide">
          Amaara <span className="text-gray-800">Restaurant</span>
        </Link>

        {/* ✅ Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-green-600 transition">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/delivery" className="hover:text-green-600 transition">
              Delivery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/delivery" onClick={() => setIsOpen(false)}>
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="border border-green-500 text-green-600 px-4 py-2 rounded-lg"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
