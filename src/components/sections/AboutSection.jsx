import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function StatCount({ targetValue, isPercentage, id }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * targetValue);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(elementRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <span
      ref={elementRef}
      className="text-2xl sm:text-4xl font-extrabold text-text group-hover:text-gold transition-colors duration-300"
    >
      {count}
      {isPercentage ? '%' : '+'}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-22 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-16 items-center mb-8 lg:mb-12">
          <div
            className="lg:col-span-6 flex flex-col justify-center space-y-2 lg:space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text leading-[1.1] max-w-xl">
                Our story
              </h2>
            </div>
            <p className="text-text/90 text-base leading-relaxed font-light max-w-2xl">
              We specialize in crafting interiors that blend beauty and function, tailored to reflect your unique
              personality. From high-end residential designs to innovative commercial environments, our architecture
              represents bespoke quality.
            </p>
          </div>

          <div
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <i className="fa-solid fa-compass-drafting"></i>
              </span>
              <div>
                <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Innovative Planning</h4>
                <p className="text-xs text-text/70 mt-1 leading-relaxed border-none">
                  Personalized spacing systems built for luxury flow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <i className="fa-solid fa-layer-group"></i>
              </span>
              <div>
                <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Premium Sourcing</h4>
                <p className="text-xs text-text/70 mt-1 leading-relaxed">
                  Only the finest durable elements cross our layouts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <i className="fa-solid fa-users-gear"></i>
              </span>
              <div>
                <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Expert Architects</h4>
                <p className="text-xs text-text/70 mt-1 leading-relaxed">
                  A certified team with top craftsmanship standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <i className="fa-solid fa-couch"></i>
              </span>
              <div>
                <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Bespoke Decor</h4>
                <p className="text-xs text-text/70 mt-1 leading-relaxed">
                  Tailored furniture crafted around your identity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div
            className="lg:col-span-6 relative group h-[350px] sm:h-[450px] lg:h-[410px] w-full rounded-[1rem] lg:rounded-[1.5rem] overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="/images/home2.png"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              alt="Cubic Builders Construction"
            />
            <div className="absolute inset-0 bg-dark/20 transition-opacity duration-300 group-hover:bg-dark/35"></div>
            <Link
              to="/about"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-15 h-15 sm:w-20 sm:h-20 rounded-full bg-transparent border border-white/50 hover:bg-primary text-white hover:scale-110 flex items-center justify-center font-bold font-serif tracking-wider text-[9px] sm:text-[12px] transition-all duration-300 shadow-2xl z-20"
            >
              More Info
            </Link>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-white p-4 sm:p-8 rounded-[1rem] border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-[150px] sm:h-[190px] group">
              <div className="flex items-center justify-between">
                <StatCount targetValue={10} isPercentage={false} />
                <span className="text-lg sm:text-xl text-primary">
                  <i className="fa-solid fa-hotel"></i>
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text text-xs sm:text-sm tracking-wide">Years Of Experience</h4>
                <p className="text-[10px] sm:text-xs text-text/60 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                  Delivering custom bespoke design and build solutions.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-8 rounded-[1rem] border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-[150px] sm:h-[190px] group">
              <div className="flex items-center justify-between">
                <StatCount targetValue={250} isPercentage={false} />
                <span className="text-lg sm:text-xl text-primary">
                  <i className="fa-solid fa-helmet-safety"></i>
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text text-xs sm:text-sm tracking-wide">Projects Completed</h4>
                <p className="text-[10px] sm:text-xs text-text/60 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                  Precision-driven execution across every unique build.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-8 rounded-[1rem] border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-[150px] sm:h-[190px] group">
              <div className="flex items-center justify-between">
                <StatCount targetValue={15} isPercentage={false} />
                <span className="text-lg sm:text-xl text-primary">
                  <i className="fa-solid fa-award"></i>
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text text-xs sm:text-sm tracking-wide">Design Awards</h4>
                <p className="text-[10px] sm:text-xs text-text/60 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                  Industry-recognized planning and bespoke luxury.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-8 rounded-[1rem] border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-[150px] sm:h-[190px] group">
              <div className="flex items-center justify-between">
                <StatCount targetValue={100} isPercentage={true} id="stat-satisfaction" />
                <span className="text-lg sm:text-xl text-primary">
                  <i className="fa-solid fa-circle-check"></i>
                </span>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-text text-xs sm:text-sm tracking-wide">Client Satisfaction</h4>
                <p className="text-[10px] sm:text-xs text-text/60 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                  Unwavering commitment to absolute excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
