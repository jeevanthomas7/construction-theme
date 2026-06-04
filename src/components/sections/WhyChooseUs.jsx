import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text font-serif leading-[1.15] tracking-tight">
              Crafting High-End Excellence, Delivering Complete Trust
            </h2>
          </div>
          <p className="text-text/70 text-base leading-relaxed font-light max-w-sm">
            At Cubic Builders, we merge exquisite architectural concepts with engineering precision to deliver homes
            that are permanently structurally sound.
          </p>
        </div>

        <div
          className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-[1rem] lg:rounded-[2rem] overflow-hidden shadow-2xl group z-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dark/30 z-10"></div>
          <div className="absolute bottom-6 left-6 bg-primary text-white p-5 flex flex-col gap-1 rounded-2xl shadow-2xl z-20 border border-white/10">
            <span className="text-2xl font-bold font-serif text-gold leading-none">100%</span>
            <span className="text-[9px] tracking-widest uppercase font-medium text-white/80">Turnkey Delivery</span>
          </div>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6 bg-bg/40 rounded-3xl border border-primary/10 hover:shadow-xl hover:bg-white hover:border-gold/40 transition-all duration-300 group">
            <span className="font-serif text-2xl sm:text-3xl text-primary font-bold select-none">01</span>
            <div className="space-y-1 sm:space-y-2">
              <h4 className="font-bold text-dark text-xs sm:text-base tracking-wide uppercase group-hover:text-primary transition-colors duration-300">
                Absolute Transparency
              </h4>
              <p className="text-[10px] sm:text-sm text-text/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                Our detailed itemized estimations and clear terms guarantee zero hidden fees or unexpected costs.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6 bg-bg/40 rounded-3xl border border-primary/10 hover:shadow-xl hover:bg-white hover:border-gold/40 transition-all duration-300 group">
            <span className="font-serif text-2xl sm:text-3xl text-primary font-bold select-none">02</span>
            <div className="space-y-1 sm:space-y-2">
              <h4 className="font-bold text-dark text-xs sm:text-base tracking-wide uppercase group-hover:text-primary transition-colors duration-300">
                Bespoke Architecture
              </h4>
              <p className="text-[10px] sm:text-sm text-text/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                Every blueprint, floor plan, and 3D interior design is custom-shaped around your lifestyle.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6 bg-bg/40 rounded-3xl border border-primary/10 hover:shadow-xl hover:bg-white hover:border-gold/40 transition-all duration-300 group">
            <span className="font-serif text-2xl sm:text-3xl text-primary font-bold select-none">03</span>
            <div className="space-y-1 sm:space-y-2">
              <h4 className="font-bold text-dark text-xs sm:text-base tracking-wide uppercase group-hover:text-primary transition-colors duration-300">
                On-Time Delivery
              </h4>
              <p className="text-[10px] sm:text-sm text-text/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                Through rigorous site supervision and planning, we complete every construction phase on schedule.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6 bg-bg/40 rounded-3xl border border-primary/10 hover:shadow-xl hover:bg-white hover:border-gold/40 transition-all duration-300 group">
            <span className="font-serif text-2xl sm:text-3xl text-primary font-bold select-none">04</span>
            <div className="space-y-1 sm:space-y-2">
              <h4 className="font-bold text-dark text-xs sm:text-base tracking-wide uppercase group-hover:text-primary transition-colors duration-300">
                Premium Sourcing
              </h4>
              <p className="text-[10px] sm:text-sm text-text/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-none">
                We source only high-grade, sustainable materials from verified global suppliers to ensure lifetime durability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
