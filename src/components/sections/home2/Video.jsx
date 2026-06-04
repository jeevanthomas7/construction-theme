import React from 'react';

export default function Video() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-dark flex items-center justify-center font-sans">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-40">
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div
        className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center justify-center space-y-6 md:space-y-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <a
          href="/videos/video.mp4"
          className="glightbox group relative w-15 h-15 sm:w-20 sm:h-20 rounded-full bg-transparent hover:bg-primary border border-white text-white flex items-center justify-center transition-all duration-500 shadow-2xl"
        >
          <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping group-hover:bg-white/30"></span>
          <i className="fa-solid fa-play text-2xl sm:text-3xl ml-1 transition-colors duration-300"></i>
        </a>

        <div className="flex flex-col space-y-3 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Designing Spaces That Inspire Life
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed font-light pt-2">
            Take a virtual tour through our bespoke construction process and experience how we convert standard blueprints into magnificent realities.
          </p>
        </div>
      </div>
    </section>
  );
}
