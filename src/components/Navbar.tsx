import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ScrollText, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://kongunaducollege.ac.in/sites/kongunaducollege.ac.in/files/KASC_logo_1.png" 
                alt="KASC Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">
                <span className="md:hidden text:sm bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Kongunadu Arts and Science College</span>
                <span className="hidden md:inline bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Kongunadu Arts and Science College</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <Calendar className="inline-block w-4 h-4 mr-1" />
                Events
              </Link>
              <Link to="/rules" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <ScrollText className="inline-block w-4 h-4 mr-1" />
                Rules
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <Phone className="inline-block w-4 h-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden
          fixed inset-0 z-50 bg-black/95 backdrop-blur-md
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="pt-20 pb-3 px-4 space-y-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 text-white px-3 py-4 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </Link>
          <Link
            to="/rules"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 text-white px-3 py-4 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
          >
            <ScrollText className="h-5 w-5" />
            <span>Rules</span>
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 text-white px-3 py-4 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;