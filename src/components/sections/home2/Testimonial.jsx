import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Testimonial() {
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
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7 md:mb-12"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs mb-3 block uppercase">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-text tracking-tight leading-tight">
              What our clients say
            </h2>
          </div>
          <div className="hidden md:block max-w-[300px] text-right">
            <p className="text-text/50 text-sm leading-relaxed font-medium">
              Discover why prominent families and businesses trust Cubic Builders for their most valuable construction
              and architectural spaces.
            </p>
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
              el: '.swiper-pagination-testimonial-2',
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
                <div className="bg-white border border-primary/30 p-8 md:p-10 rounded-[2.5rem] h-[450px] md:h-[480px] flex flex-col items-center text-center shadow-sm hover:border-primary/30 transition-all duration-500 group relative">
                  <div className="relative mb-8 shrink-0">
                    <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-700"></div>
                    <img
                      src={`/images/charaters/${item.img}`}
                      className="relative w-24 h-24 rounded-full object-cover border-2 border-gold/20 p-1 group-hover:border-primary/40 transition-colors duration-500"
                      alt={item.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <i className="fa-solid fa-quote-right text-white text-[10px]"></i>
                    </div>
                  </div>

                  <div className="flex gap-1.5 mb-6 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-gold text-[10px]"></i>
                    ))}
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-text/80 text-[12px] sm:text-[13px] lg:text-lg leading-relaxed line-clamp-6 lg:line-clamp-5 px-2 font-medium">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-text/20 w-full shrink-0">
                    <h4 className="font-serif text-2xl text-text leading-none group-hover:text-primary transition-colors duration-500">
                      {item.name}
                    </h4>
                    <span className="text-primary text-[9px] uppercase tracking-[0.2em] font-bold mt-3 block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center mt-9 lg:mt-10">
          <div className="swiper-pagination-testimonial-2 flex justify-center items-center gap-3"></div>
        </div>
      </div>

      <style>{`
        .swiper-pagination-testimonial-2 .swiper-pagination-bullet { 
            display: inline-block !important;
            width: 35px !important; 
            height: 3px !important; 
            background-color: #111315 !important; 
            border-radius: 0px !important; 
            opacity: 0.3 !important; 
            transition: all 0.4s ease !important;
            cursor: pointer !important;
        }
        .swiper-pagination-testimonial-2 .swiper-pagination-bullet-active { 
            background-color: #C8A96B !important; 
            opacity: 1 !important; 
            width: 55px !important; 
        }
      `}</style>
    </section>
  );
}
