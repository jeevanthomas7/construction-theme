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
      img: '/images/services/3.jpg',
      title: 'Permit',
      desc: 'We oversee the submission of permit applications and obtain all essential local municipal approvals.',
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
    {
      img: '/images/services/6.jpg',
      title: 'Residential Design',
      desc: 'Bespoke home plans, space mapping, and interior designs completely tailored around your lifestyle.',
    },
  ];

  const CardItem = ({ item }) => (
    <div className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl group h-full">
      <div className="w-full sm:w-[120px] h-[120px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={item.img}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          alt={item.title}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between h-full min-h-[120px]">
        <div>
          <h3 className="font-bold text-text text-lg group-hover:text-primary transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-text/70 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2 font-light">
            {item.desc}
          </p>
        </div>
        <div className="pt-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300"
          >
            Learn More <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1.5"></i>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative text-center mb-0 lg:mb-16" data-aos="fade-left" data-aos-duration="1000">
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

        {/* Desktop — plain grid, no Swiper */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8" data-aos="fade-right" data-aos-duration="1000">
          {services.map((item, idx) => (
            <CardItem key={idx} item={item} />
          ))}
        </div>

        {/* Mobile/Tablet — Swiper */}
        <div className="lg:hidden" data-aos="fade-right" data-aos-duration="1000">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.1}
            spaceBetween={20}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              el: '.swiper-pagination-services',
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
          >
            {services.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <CardItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-services flex justify-center items-center gap-3 mt-4"></div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-services .swiper-pagination-bullet { 
            display: inline-block !important;
            width: 35px !important; 
            height: 3px !important; 
            background-color: #111315 !important; 
            border-radius: 0px !important; 
            opacity: 0.3 !important; 
            transition: all 0.4s ease !important;
            cursor: pointer !important;
        }
        .swiper-pagination-services .swiper-pagination-bullet-active { 
            background-color: #C8A96B !important; 
            opacity: 1 !important; 
            width: 55px !important; 
        }
      `}</style>
    </section>
  );
}