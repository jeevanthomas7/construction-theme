import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomeActive = location.pathname === '/' || location.pathname === '/home2';

  return (
    <>
      <header
        id="mainHeader"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white shadow-md py-3 text-dark border-transparent'
            : 'bg-transparent py-5 lg:py-6 text-white border-white/15'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between w-full">
          <Link to="/" className="flex items-center group">
            <img
              src="/images/logo1.png"
              className={`h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                isScrolled ? 'hidden' : ''
              }`}
              alt="Cubic Builders"
            />
            <img
              src="/images/logo2.png"
              className={`h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                isScrolled ? '' : 'hidden'
              }`}
              alt="Cubic Builders"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 font-bold font-['Inter'] text-md tracking-wider">
            <div className="relative group">
              <button
                className={`flex items-center gap-1 hover:text-gold transition-colors duration-300 py-2 ${
                  isHomeActive ? 'text-gold' : 'hover:text-gold'
                }`}
              >
                Home <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </button>
              <div className="absolute left-0 mt-2 w-37 bg-white text-dark shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-gold py-2 rounded-b-xl z-50">
                <Link
                  to="/"
                  className="block px-6 py-3 hover:bg-bg hover:text-primary transition-colors duration-200 font-medium border-b border-gray-300"
                >
                  Home
                </Link>
                <Link
                  to="/home2"
                  className="block px-6 py-3 hover:bg-bg hover:text-primary transition-colors duration-200 font-medium"
                >
                  Home 2
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`hover:text-gold transition-colors duration-300 ${
                location.pathname === '/about' ? 'text-gold' : ''
              }`}
            >
              About Us
            </Link>

            <Link
              to="/services"
              className={`transition-colors duration-300 ${
                location.pathname === '/services' || location.pathname === '/services-detail'
                  ? 'text-gold'
                  : 'hover:text-gold'
              }`}
            >
              Services
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center gap-1 transition-colors duration-300 py-2 ${
                  location.pathname === '/gallery' || location.pathname === '/faq'
                    ? 'text-gold'
                    : 'hover:text-gold'
                }`}
              >
                Pages <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </button>
              <div className="absolute left-0 mt-2 w-37 bg-white text-dark shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-gold py-2 rounded-b-xl z-50">
                <Link
                  to="/gallery"
                  className="block px-6 py-3 hover:bg-bg hover:text-primary transition-colors duration-200 font-medium border-b border-gray-300"
                >
                  Our Gallery
                </Link>
                <Link
                  to="/faq"
                  className="block px-6 py-3 hover:bg-bg hover:text-primary transition-colors duration-200 font-medium"
                >
                  Faq
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className={`hover:text-gold transition-colors duration-300 ${
                location.pathname === '/contact' ? 'text-gold' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center font-sans gap-3 bg-primary text-white hover:bg-gold hover:text-dark px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-lg"
            >
              <span>Send a Message</span>
              <i className="fa-solid fa-arrow-right transition-transform duration-300 group-hover:translate-x-1.5"></i>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden transition-colors duration-300 focus:outline-none ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 flex items-center justify-between border-b border-gray-200 pl-6 pr-6">
          <img src="/images/logo2.png" className="h-10 w-auto object-contain" alt="Cubic Builders" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-dark hover:text-gold transition-colors duration-300 focus:outline-none"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pl-6 pr-12 py-10">
          <nav className="flex flex-col gap-6 text-lg font-semibold text-dark font-['Inter']">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsHomeOpen(!isHomeOpen)}
                className={`flex items-center justify-between w-full hover:text-gold transition-colors duration-200 ${
                  isHomeActive ? 'text-gold' : ''
                }`}
              >
                <span>Home</span>
                <i
                  className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${
                    isHomeOpen ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              <div
                className={`${
                  isHomeOpen ? 'flex' : 'hidden'
                } flex flex-col gap-3 pl-4 border-l-2 border-gold/30 mt-2 text-base text-gray-600 font-medium`}
              >
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
                <Link to="/home2" className="hover:text-primary">
                  Home 2
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className={`hover:text-gold transition-colors duration-200 ${
                location.pathname === '/about' ? 'text-gold' : ''
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`transition-colors duration-300 ${
                location.pathname === '/services' || location.pathname === '/services-detail'
                  ? 'text-gold'
                  : 'hover:text-gold'
              }`}
            >
              Services
            </Link>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className={`flex items-center justify-between w-full hover:text-gold transition-colors duration-200 ${
                  location.pathname === '/gallery' || location.pathname === '/faq' ? 'text-gold' : ''
                }`}
              >
                <span>Pages</span>
                <i
                  className={`fa-solid fa-chevron-down text-sm transition-transform duration-300 ${
                    isPagesOpen ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              <div
                className={`${
                  isPagesOpen ? 'flex' : 'hidden'
                } flex flex-col gap-3 pl-4 border-l-2 border-gold/30 mt-2 text-base text-gray-600 font-medium`}
              >
                <Link to="/gallery" className="hover:text-primary">
                  Gallery
                </Link>
                <Link to="/faq" className="hover:text-primary">
                  Faq
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className={`hover:text-gold transition-colors duration-200 ${
                location.pathname === '/contact' ? 'text-gold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="p-6 border-t border-gray-100 pl-6 pr-6">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center bg-primary text-white hover:bg-gold hover:text-dark py-4 text-xs font-bold tracking-wider uppercase rounded-2xl transition-all duration-300 shadow-md"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </>
  );
}
