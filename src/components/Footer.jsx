import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-bg py-12 md:py-14 lg:pt-15 lg:pb-10 border-t border-white/5 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-12 mb-8 text-center lg:text-left items-start">
          <div className="flex flex-col items-center lg:items-start gap-7">
            <Link to="/home2" className="inline-block">
              <img src="/images/logo1.png" className="h-10 w-auto object-contain" alt="Cubik Builders" />
            </Link>

            <p className="text-bg/70 text-sm leading-relaxed max-w-sm text-center lg:text-left">
              We specialize in crafting interiors that blend beauty and function, tailored to reflect your unique personality.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-dark flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-dark flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-dark flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-dark flex items-center justify-center transition-all duration-300"
              >
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-bg/80">
              <a href="mailto:info@cubikbuilders.com" className="hover:text-gold transition-colors duration-200">
                info@cubikbuilders.com
              </a>
              <a href="tel:+918129480780" className="hover:text-gold transition-colors duration-200">
                +91 81294 80780
              </a>
              <p className="leading-relaxed max-w-xs mx-auto lg:mx-0">
                Room No: X/449Q, Second Floor, G O Tower, Peramangalam, Thrissur - 680545
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm text-bg/80 lg:ml-2">
              <Link to="/about" className="hover:text-gold transition-colors duration-200">
                About Us
              </Link>
              <Link to="/services" className="hover:text-gold transition-colors duration-200">
                Services
              </Link>
              <Link to="/gallery" className="hover:text-gold transition-colors duration-200">
                Gallery
              </Link>
              <Link to="/contact" className="hover:text-gold transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Our Services</h4>
            <div className="flex flex-col gap-3 text-sm text-bg/80">
              <Link to="/services" className="hover:text-gold transition-colors duration-200">
                Residential Design
              </Link>
              <Link to="/services" className="hover:text-gold transition-colors duration-200">
                Commercial Architecture
              </Link>
              <Link to="/services" className="hover:text-gold transition-colors duration-200 font-medium">
                Interior Redesign
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider text-bg/60 text-center md:text-left pt-2">
          <p>&copy; {currentYear} Cubik Builders. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-gold transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-gold transition-colors duration-200">
              Terms
            </Link>
            <Link to="/about" className="hover:text-gold transition-colors duration-200">
              About us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
