import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Amaara Restaurant</h2>
          <p className="text-gray-300 leading-relaxed">
            Experience the taste of freshness and hospitality at Amaara. 
            Serving you from Garissa, Nairobi, and Mombasa — where flavor meets elegance.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-green-700 rounded-full hover:bg-green-600 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center border-t border-green-700 mt-10 pt-6 text-gray-400 text-sm">
        © 2025 Amaara Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
