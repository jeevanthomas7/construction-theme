import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function LatestSection() {
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
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2 lg:mb-12"
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
              className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-primary px-8 py-4 rounded-2xl text-white hover:text-dark hover:bg-gold transition-colors duration-300"
            >
              View All Projects{' '}
              <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1.5"></i>
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
              el: '.swiper-pagination-cases',
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
                <div className="relative overflow-hidden group rounded-[1.5rem] sm:rounded-[2rem] h-[450px] sm:h-[500px] shadow-sm hover:shadow-2xl transition-all duration-500 z-0">
                  <img
                    src={`/images/projects/${item.img}`}
                    className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out z-0"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 top-6 right-0 p-8 sm:p-10 z-20 flex flex-col justify-end h-full">
                    <span className="text-white text-[10px] sm:text-[9px] font-bold uppercase tracking-[0.25em] mb-1">
                      {item.type}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight mb-4">{item.title}</h3>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-5">
                      <span className="text-white/70 text-xs sm:text-sm font-light">
                        <i className="fa-solid fa-location-dot text-gold mr-2"></i>
                        {item.location}
                      </span>
                      <Link
                        to={item.link}
                        className="w-10 h-10 rounded-full bg-gold text-dark flex items-center justify-center hover:bg-white transition-colors duration-300"
                      >
                        <i className="fa-solid fa-arrow-right-long text-sm"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center mt-10 lg:mt-15">
            <div className="swiper-pagination-cases flex justify-center items-center gap-3"></div>
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
      </div>

      <style>{`
        .swiper-pagination-cases .swiper-pagination-bullet { 
            display: inline-block !important;
            width: 35px !important; 
            height: 3px !important; 
            background-color: #111315 !important; 
            border-radius: 0px !important; 
            opacity: 0.3 !important; 
            transition: all 0.4s ease !important;
            cursor: pointer !important;
        }
        .swiper-pagination-cases .swiper-pagination-bullet-active { 
            background-color: #C8A96B !important; 
            opacity: 1 !important; 
            width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
