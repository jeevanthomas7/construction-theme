import React from 'react';

export default function VideoSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-dark flex items-center justify-center font-sans">
      <img
        src="/images/home2.png"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-45 select-none pointer-events-none"
        alt="Cubic Builders Process Showcase"
      />

      <div
        className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full h-full flex flex-col items-center justify-center text-center space-y-6 md:space-y-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gold rounded-none"></span>
            <span className="text-gold font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">Watch Our Story</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.2]">
            Tailored architectural and construction solutions for every budget
          </h2>
        </div>

        <div className="relative flex items-center justify-center pt-2">
          <a
            href="/videos/video.mp4"
            className="glightbox group relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36"
          >
            <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[7.5px] uppercase font-bold tracking-[0.14em] fill-white/80 group-hover:fill-gold transition-colors duration-300">
                <textPath href="#circlePath" startOffset="0%">
                  • Watch Our Story • Watch Our Story • Watch Our Story
                </textPath>
              </text>
            </svg>

            <div className="absolute w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
              <i className="fa-solid fa-play text-sm ml-0.5"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
