import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function TestimonialSection() {
  const testimonials = [
    {
      img: 't1.jpg',
      name: 'Rohan Mathews',
      role: 'Custom Homeowner',
      text: 'Cubic Builders turned our plot of land into a stunning architectural masterpiece. Their design-build approach made the complex process completely transparent and seamless.',
    },
    {
      img: 't2.jpg',
      name: 'Meera Krishnan',
      role: 'Villa Renovation',
      text: 'The interior redesign of our heritage villa was executed with extreme precision. They beautifully preserved classic elements while adding modern bespoke luxury features.',
    },
    {
      img: 't3.jpg',
      name: 'Siddharth Sen',
      role: 'Commercial Client',
      text: 'Outstanding project management and supervision. They finished our corporate headquarters right on schedule, within budget, and with zero safety compromises.',
    },
    {
      img: 't4.jpg',
      name: 'Ananya Roy',
      role: 'Elite Customer',
      text: 'Their space planning and custom modular furniture craftsmanship are top-notch. Every corner of our new penthouse reflects our personal style and values.',
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden rounded-t-[20px] lg:rounded-t-[40px] font-sans">
      <img
        src="/images/slider.png"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
        alt="Cubic Builders Backdrop"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/70 to-dark z-10"></div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 lg:mb-12"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-[0.3em] text-[10px] md:text-xs mb-3 block uppercase">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-white tracking-tight leading-tight">
              What our clients say
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <Link
              to="/about"
              className="inline-flex items-center gap-4 bg-primary hover:bg-gold hover:text-dark text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-2xl group shadow-2xl"
            >
              More Info{' '}
              <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1.5"></i>
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
              el: '.swiper-pagination-testimonial',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="testimonialSwiper !overflow-hidden"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2.5rem] h-[380px] sm:h-[420px] flex flex-col justify-between hover:bg-white/10 hover:border-gold/30 transition-all duration-500 group relative backdrop-blur-md">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-gold text-[10px]"></i>
                      ))}
                    </div>
                    <span className="text-white/20 text-3xl group-hover:text-gold transition-colors duration-500">
                      <i className="fa-solid fa-quote-right"></i>
                    </span>
                  </div>

                  <div className="flex-grow flex flex-col justify-center my-4 border-t border-white/10">
                    <p className="text-white/90 text-left text-sm sm:text-base leading-relaxed line-clamp-5 font-medium">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-6 w-full mt-auto">
                    <img
                      src={`/images/charaters/${item.img}`}
                      className="w-14 h-14 rounded-full object-cover border border-white/20 p-0.5 group-hover:border-gold transition-colors duration-500"
                      alt={item.name}
                    />
                    <div className="text-left leading-none">
                      <h4 className="font-serif text-lg sm:text-xl text-white leading-none group-hover:text-gold transition-colors duration-500">
                        {item.name}
                      </h4>
                      <span className="text-gold text-[8px] uppercase tracking-[0.2em] font-bold mt-2 block leading-none">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center mt-10 lg:mt-15">
            <div className="swiper-pagination-testimonial flex justify-center items-center gap-3"></div>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-testimonial .swiper-pagination-bullet { 
            display: inline-block !important;
            width: 35px !important; 
            height: 3px !important; 
            background-color: #ffffff !important; 
            border-radius: 0px !important; 
            opacity: 0.3 !important; 
            transition: all 0.4s ease !important;
            cursor: pointer !important;
        }
        .swiper-pagination-testimonial .swiper-pagination-bullet-active { 
            background-color: #1F3A2E !important; 
            opacity: 1 !important; 
            width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
