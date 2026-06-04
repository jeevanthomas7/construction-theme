import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[92vh] lg:h-screen w-full overflow-hidden font-sans">
      <div className="h-full w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-black/35 to-transparent z-10"></div>
        <div className="absolute inset-y-0 left-0 w-[5%] lg:w-[28%] bg-dark z-10 [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"></div>

        <img
          src="/images/slider.png"
          className="absolute inset-0 w-full h-full object-cover animate-[fade-in_0.5s_ease-out_forwards,hero-zoom_30s_linear_infinite_alternate]"
          alt="Interior Design"
        />

        <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center">
          <div className="max-w-3xl flex flex-col space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center gap-3" data-aos="fade-down" data-aos-duration="1000">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gold pt-35 lg:pt-25">
                Your Style, Our Design
              </span>
            </div>

            <h1
              className="text-white text-[46px] sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] max-w-5xl"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Designing Spaces,
              <br /> Reflecting You
            </h1>

            <p
              className="text-bg/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg tracking-wider font-light"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              We specialize in crafting interiors that blend beauty and function, tailored to reflect your unique
              personality.
            </p>

            <div className="pt-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600">
              <Link
                to="/services"
                className="inline-flex items-center gap-4 bg-primary hover:bg-white hover:text-dark text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-2xl group/btn shadow-2xl"
              >
                view Services{' '}
                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-2"></i>
              </Link>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="hidden sm:flex absolute -right-4 md:right-10 lg:right-30 bottom-20 lg:bottom-30 flex flex-col items-center gap-30 z-30"
        >
          <a
            href="#"
            className="rotate-90 text-[11px] font-bold tracking-[0.2em] text-white opacity-90 hover:opacity-100 hover:text-gold transition-all whitespace-nowrap flex items-center gap-2"
          >
            <i className="fab fa-whatsapp text-sm"></i>Whatsapp
          </a>
          <a
            href="#"
            className="rotate-90 text-[11px] font-bold tracking-[0.2em] text-white opacity-90 hover:opacity-100 hover:text-gold transition-all whitespace-nowrap flex items-center gap-2"
          >
            <i className="fab fa-instagram text-sm"></i> Instagram
          </a>
          <a
            href="#"
            className="rotate-90 text-[11px] font-bold tracking-[0.2em] text-white opacity-90 hover:opacity-100 hover:text-gold transition-all whitespace-nowrap flex items-center gap-2"
          >
            <i className="fab fa-facebook-f text-sm"></i> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
