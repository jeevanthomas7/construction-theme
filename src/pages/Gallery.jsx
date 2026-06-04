import React from 'react';

export default function Gallery() {
  const items = [
    { type: 'video', src: '/videos/video.mp4' },
    { type: 'image', src: '/images/slide3.png' },
    { type: 'image', src: '/images/slider1.png' },
    { type: 'image', src: '/images/sli.jpg' },
    { type: 'image', src: '/images/faq.png' },
    { type: 'image', src: '/images/abt.jpg' },
    { type: 'image', src: '/images/abt2.jpg' },
    { type: 'image', src: '/images/home2.png' },
    { type: 'image', src: '/images/home2-sli3.png' },
  ];

  return (
    <section className="bg-bg py-12 md:py-16 lg:py-20 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {items.map((item, idx) => {
            if (item.type === 'video') {
              return (
                <a
                  key={idx}
                  href={item.src}
                  className="glightbox group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-gold/10"
                  data-gallery="cubic-gallery"
                >
                  <video
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-all duration-500">
                      <i className="fa-solid fa-play ml-1"></i>
                    </div>
                  </div>
                </a>
              );
            } else {
              return (
                <a
                  key={idx}
                  href={item.src}
                  className="glightbox group relative aspect-square overflow-hidden rounded-2xl shadow-lg border border-gold/10"
                  data-gallery="cubic-gallery"
                >
                  <img
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt="Cubic Builders Project"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
