import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="scrollToTop"
      className={`fixed bottom-4 lg:bottom-6 left-3 md:left-5 z-50 transition-all duration-700 ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-10'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative w-7 h-7 md:w-8 md:h-8 border border-gold/40 flex items-center justify-center rotate-45 bg-gold hover:bg-primary transition-all duration-500 group shadow-2xl"
      >
        <i className="fa-solid fa-chevron-up -rotate-45 animate-bounce-slow text-black group-hover:text-white text-sm md:text-base transition-colors duration-500"></i>
        <div className="absolute inset-0 border border-gold/20 -m-1 group-hover:m-0 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      </button>
    </div>
  );
}
