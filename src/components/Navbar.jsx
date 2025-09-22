import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // modern icons (install: npm i lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-green-600">
            Gideon Ndoro
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
