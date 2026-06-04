import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function WhatWeDo() {
  const services = [
    {
      img: '/images/services/1.jpg',
      title: 'Plan',
      desc: 'We create initial sketches and concepts that align with your personal style and practical requirements.',
    },
    {
      img: '/images/services/2.jpg',
      title: 'Estimates',
      desc: 'We present a comprehensive proposal that clearly defines the project scope, schedule, and costs.',
    },
    {
      img: '/images/services/4.jpg',
      title: 'Supervision',
      desc: 'We make sure that the project advances according to schedule, maintaining top quality standards.',
    },
    {
      img: '/images/services/5.jpg',
      title: 'Construction',
      desc: 'Our proficient construction team executes the blueprint focusing on detail, quality, and safety.',
    },
  ];

  return (
    <section className="relative bg-bg pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative text-center mb-2 lg:mb-10" data-aos="fade-left" data-aos-duration="1000">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold text-dark/[0.09] tracking-widest uppercase select-none pointer-events-none font-serif">
            Services
          </span>
          <div className="relative z-10 flex flex-col space-y-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text font-serif max-w-3xl mx-auto leading-tight">
              Bespoke Design & Build Solutions
            </h2>
          </div>
        </div>

        <div className="swiper-container" data-aos="fade-right" data-aos-duration="1000">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.1}
            spaceBetween={20}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              el: '.swiper-pagination-services-2',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="servicesSwiper !overflow-hidden"
          >
            {services.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="flex flex-col bg-white border border-gray-200 transition-all duration-300 rounded-3xl overflow-hidden group h-full">
                  <div className="w-full h-[200px] sm:h-[240px] overflow-hidden bg-gray-50">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      alt={item.title}
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="font-bold text-text text-xl group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-text/70 text-sm leading-relaxed line-clamp-3 font-light">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100 mt-6">
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300"
                      >
                        Learn More{' '}
                        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1.5"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center mt-5 lg:mt-6">
          <div className="swiper-pagination-services-2 flex justify-center items-center gap-3"></div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-services-2 .swiper-pagination-bullet { 
            display: inline-block !important;
            width: 35px !important; 
            height: 3px !important; 
            background-color: #111315 !important; 
            border-radius: 0px !important; 
            opacity: 0.3 !important; 
            transition: all 0.4s ease !important;
            cursor: pointer !important;
        }
        .swiper-pagination-services-2 .swiper-pagination-bullet-active { 
            background-color: #C8A96B !important; 
            opacity: 1 !important; 
            width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
