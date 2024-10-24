import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Navigation Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#support" className="hover:text-gray-300">Support</a>
          <a href="#progress" className="hover:text-gray-300">Progress</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Instagram
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
