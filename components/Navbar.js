import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Code Minds 404</h1>
          </div>
          {/* Right side - Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#support" className="hover:text-gray-300">
              Support
            </a>
            <a href="/progress" className="hover:text-gray-300">
              Progress
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
