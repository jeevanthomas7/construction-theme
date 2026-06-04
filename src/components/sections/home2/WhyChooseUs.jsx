import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-8" data-aos="fade-right" data-aos-duration="800">
            <div className="flex flex-col space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text font-serif leading-tight">
                Crafting High-End Excellence, Delivering Complete Trust
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              <div className="bg-bg p-6 rounded-3xl border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all duration-500 group">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 text-lg mb-4">
                  <i className="fa-solid fa-handshake-angle"></i>
                </span>
                <h4 className="font-medium text-dark text-base tracking-wide uppercase">Absolute Transparency</h4>
                <p className="text-xs sm:text-sm text-text/70 mt-2 leading-relaxed font-light">
                  Our detailed itemized estimations and clear terms guarantee zero hidden fees or unexpected costs.
                </p>
              </div>

              <div className="bg-bg p-6 rounded-3xl border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all duration-500 group">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 text-lg mb-4">
                  <i className="fa-solid fa-pencil-ruler"></i>
                </span>
                <h4 className="font-medium text-dark text-base tracking-wide uppercase">Bespoke Architecture</h4>
                <p className="text-xs sm:text-sm text-text/70 mt-2 leading-relaxed font-light">
                  Every blueprint, floor plan, and 3D interior design is custom-shaped around your lifestyle.
                </p>
              </div>

              <div className="bg-bg p-6 rounded-3xl border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all duration-500 group">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 text-lg mb-4">
                  <i className="fa-solid fa-clock"></i>
                </span>
                <h4 className="font-medium text-dark text-base tracking-wide uppercase">On-Time Delivery</h4>
                <p className="text-xs sm:text-sm text-text/70 mt-2 leading-relaxed font-light">
                  Through rigorous site supervision and planning, we complete every construction phase on schedule.
                </p>
              </div>

              <div className="bg-bg p-6 rounded-3xl border border-gray-200 hover:shadow-xl hover:border-gold/30 transition-all duration-500 group">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 text-lg mb-4">
                  <i className="fa-solid fa-gem"></i>
                </span>
                <h4 className="font-medium text-dark text-base tracking-wide uppercase">Premium Sourcing</h4>
                <p className="text-xs sm:text-sm text-text/70 mt-2 leading-relaxed font-light">
                  We source only high-grade, sustainable materials from verified global suppliers to ensure lifetime durability.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center" data-aos="fade-left" data-aos-duration="800">
            <div className="relative w-full aspect-square lg:aspect-[4/5] sm:max-w-[450px] lg:max-w-none overflow-hidden rounded-[2.5rem] group">
              <img
                src="/images/services/6.jpg"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                alt="Bespoke Luxury Villa"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-white p-5 flex flex-col gap-1 rounded-2xl shadow-2xl z-10 border border-white/10">
                <span className="text-2xl font-bold font-serif text-gold leading-none">100%</span>
                <span className="text-[9px] tracking-widest uppercase font-medium text-white/80">Turnkey Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
