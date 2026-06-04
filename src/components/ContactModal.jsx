import React from 'react';

export default function ContactModal() {
  return (
    <div className="fixed bottom-4 lg:bottom-6 right-2 md:right-5 z-50 font-sans group">
      <div className="relative w-[88px] h-[88px] flex items-end justify-end">
        {/* Floating submenu on group hover */}
        <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-2 w-[88px] h-[88px] transition-all duration-300 transform scale-0 origin-bottom-right opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto">
          <a
            href="mailto:info@cubikbuilders.com"
            className="w-10 h-10 rounded-full bg-[#FFD54F] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <i className="fa-solid fa-envelope text-sm"></i>
          </a>
          <a
            href="tel:+918129480780"
            className="w-10 h-10 rounded-full bg-[#90CAF9] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <i className="fa-solid fa-phone text-sm"></i>
          </a>
          <a
            href="https://wa.me/918129480780"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#81C784] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>
          <div className="w-10 h-10"></div>
        </div>

        {/* Floating trigger button */}
        <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#29B6F6] text-white flex items-center justify-center shadow-2xl transition-all duration-300 z-10 pointer-events-none group-hover:bg-[#FF8A65]">
          <i className="fa-solid fa-phone text-sm transition-all duration-300 transform group-hover:rotate-90 group-hover:scale-0"></i>
          <i className="fa-solid fa-xmark text-sm absolute transition-all duration-300 transform scale-0 group-hover:scale-100"></i>
        </div>
      </div>
    </div>
  );
}
