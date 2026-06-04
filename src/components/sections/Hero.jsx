import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[92vh] lg:h-screen w-full overflow-hidden font-sans bg-dark">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.swiper-pagination-hero',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        className="h-full w-full"
      >
        <SwiperSlide className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent z-10"></div>
          <img
            src="/images/hom3.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-100 group-[.swiper-slide-active]:scale-110"
            alt="Cubic Builders Slide 1"
          />
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-end pb-15 md:pb-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-none w-full">
              <div className="max-w-2xl text-left pointer-events-auto flex flex-col space-y-3 transition-all duration-1000 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                <span className="text-gold font-bold tracking-[0.3em] text-[9px] lg:text-xs uppercase">
                  Your Style, Our Design
                </span>
                <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-serif leading-[1.2] font-bold">
                  Designing Spaces,
                  <br />
                  Reflecting You
                </h1>
              </div>
              <div className="pointer-events-auto shrink-0 pb-1 transition-all duration-1000 delay-300 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-4 bg-primary hover:bg-gold hover:text-dark text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-2xl group/btn shadow-2xl"
                >
                  View Services{' '}
                  <i className="fa-solid fa-arrow-right-long transition-transform group-hover/btn:translate-x-1.5"></i>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-dark/40 z-10"></div>
          <img
            src="/images/home2-sli3.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-100 group-[.swiper-slide-active]:scale-110"
            alt="Cubic Builders Slide 3"
          />
          <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-end justify-center text-center pb-15 md:pb-12">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-sans font-black tracking-widest uppercase leading-tight transition-all duration-1000 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
                WHERE IDEAS EVOLVE INTO REALITY
              </h1>
              <div className="transition-all duration-1000 delay-300 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0 select-none pt-1">
                <Link
                  to="/services"
                  className="border-b border-white/20 py-3 px-0 uppercase tracking-[0.25em] text-[8px] sm:text-sm font-bold text-gold hover:text-white hover:border-white transition-all duration-300 inline-block"
                >
                  PRECISE DRAFTING AND DETAILING SERVICES
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-dark/45 z-10"></div>
          <img
            src="/images/slide3.png"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] scale-100 group-[.swiper-slide-active]:scale-110"
            alt="Cubic Builders Slide 2"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden mb-60 lg:mb-90">
            <span className="text-white/[0.5] text-5xl sm:text-[6rem] lg:text-[8rem] xl:text-[12rem] font-sans font-black tracking-[0.1em] uppercase select-none transition-all duration-1000 transform scale-90 group-[.swiper-slide-active]:scale-100">
              ENGRAVING
            </span>
          </div>
          <div className="hidden sm:flex relative z-20 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-end justify-end sm:justify-end pb-5 md:pb-10 w-full">
            <div className="transition-all duration-1000 delay-500 opacity-0 translate-y-10 group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0">
              <Link
                to="/services"
                className="block relative w-[220px] lg:w-[280px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 hover:border-gold hover:scale-105 transition-all duration-300 group/card"
              >
                <img
                  src="/images/home2.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                  alt="View Projects Preview"
                />
                <div className="absolute inset-0 bg-dark/20 flex items-center justify-center">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-white bg-primary/80 px-4 py-2 rounded-xl border border-white/10 group-hover/card:bg-white group-hover/card:text-dark transition-all duration-300">
                    View Projects
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination-hero flex justify-center items-center gap-3 absolute bottom-8 left-0 right-0 z-30"></div>
      </Swiper>
    </section>
  );
}
