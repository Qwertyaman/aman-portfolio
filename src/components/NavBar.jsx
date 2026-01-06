import React from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = ({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">
            Aman Srivastava
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 hover:text-blue-600 capitalize transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {['about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
