import React from 'react';
import { FaFacebook, FaTwitter,FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-extrabold mb-2">About Us</h3>
          <p className="text-gray-300">
            We are committed to revolutionizing task management for individuals and teams.
          </p>
        </div>
        <div className="mb-8 md:mb-0 text-center">
          <h3 className="text-2xl font-extrabold mb-2">Explore</h3>
          <ul>
            <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
            <li><a href="/about-us" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-extrabold mb-2">Connect with Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <FaLinkedin />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 text-center">
        <div className="container mx-auto text-sm text-gray-400">
          <p>&copy; 2023 Manage Your Task Easily. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
