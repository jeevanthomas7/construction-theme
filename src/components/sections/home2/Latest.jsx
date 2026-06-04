import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Latest() {
  const projects = [
    {
      img: '1.jpg',
      title: 'The Emerald Villa',
      type: 'Residential Architecture',
      location: 'Kochi, Kerala',
      link: '/services',
    },
    {
      img: '2.jpg',
      title: 'Luxe Corporate HQ',
      type: 'Commercial Design',
      location: 'Thrissur, Kerala',
      link: '/services',
    },
    {
      img: '3.jpg',
      title: 'Minimalist Penthouse',
      type: 'Interior Redesign',
      location: 'Bangalore, Karnataka',
      link: '/services',
    },
    {
      img: '4.jpg',
      title: 'The Horizon Estate',
      type: 'Landscape & Exterior',
      location: 'Calicut, Kerala',
      link: '/services',
    },
  ];

  return (
    <section className="relative pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0 lg:mb-10"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs mb-3 block uppercase">
              Our Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-text tracking-tight leading-tight">
              Latest Cases & Projects
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-4 bg-primary hover:bg-gold text-white hover:text-dark px-8 py-4 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
            >
              View All Projects{' '}
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1.5"></i>
            </Link>
          </div>
        </div>

        <div className="swiper-container" data-aos="fade-left" data-aos-duration="800">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.15}
            spaceBetween={20}
            loop={false}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{
              el: '.swiper-pagination-cases-2',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="casesSwiper !overflow-hidden"
          >
            {projects.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="flex flex-col bg-white border border-gray-200 transition-all duration-500 rounded-[1rem] lg:rounded-[2rem] overflow-hidden h-full group relative z-0">
                  <div className="w-full h-[220px] sm:h-[260px] overflow-hidden relative bg-gray-50 shrink-0">
                    <img
                      src={`/images/projects/${item.img}`}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-2 text-left">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] block">
                        {item.type}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-dark leading-tight group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="text-text/60 text-xs sm:text-sm font-light block pt-1">
                        <i className="fa-solid fa-location-dot text-gold/80 mr-2"></i>
                        {item.location}
                      </span>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300"
                      >
                        Explore Project{' '}
                        <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1.5"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center mt-10 lg:mt-15">
          <div className="swiper-pagination-cases-2 flex justify-center items-center gap-3"></div>
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-primary rounded-2xl gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-dark hover:bg-gold transition-colors duration-300"
          >
            View All Projects{' '}
            <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1.5"></i>
          </Link>
        </div>
      </div>

      <style>{`
        .swiper-pagination-cases-2 .swiper-pagination-bullet { 
            display: inline-block !important;
            width: 35px !important; 
            height: 3px !important; 
            background-color: #111315 !important; 
            border-radius: 0px !important; 
            opacity: 0.3 !important; 
            transition: all 0.4s ease !important;
            cursor: pointer !important;
        }
        .swiper-pagination-cases-2 .swiper-pagination-bullet-active { 
            background-color: #C8A96B !important; 
            opacity: 1 !important; 
            width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
