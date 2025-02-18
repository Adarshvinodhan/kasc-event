import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";

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
                className="h-16 w-auto "
              />
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap overflow-hidden">
                <span className="md:text-5xl md:inline overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Kongunadu Arts & Science College</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <ScrollLink
                to="events"
                smooth={true}
                duration={500}
                offset={-50} 
                className="cursor-pointer text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Calendar className="inline-block w-4 h-4 mr-1" />
                Events
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-50} 
                className="cursor-pointer text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Phone className="inline-block w-4 h-4 mr-1" />
                Contact
              </ScrollLink>
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
        <div className="pt-20 pb-3 px-4 space-y-1 bg-black/50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white focus:outline-none"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer flex items-center space-x-2 text-white px-3 py-4 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>Events</span>
          </ScrollLink>
          <ScrollLink 
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer flex items-center space-x-2 text-white px-3 py-4 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Contact</span>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;