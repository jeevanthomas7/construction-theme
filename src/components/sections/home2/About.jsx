import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function StatCount({ targetValue, isPercentage }) {
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
            const currentValue = Math.floor(progress * targetValue);
            setCount(currentValue);

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
      className="text-4xl sm:text-5xl font-extrabold text-gold"
    >
      {count}
      {isPercentage ? '%' : '+'}
    </span>
  );
}

export default function About() {
  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px]" data-aos="fade-right" data-aos-duration="1000">
            <div className="absolute top-0 left-0 w-[75%] h-[80%] overflow-hidden shadow-2xl rounded-3xl">
              <img
                src="/images/faq.png"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                alt="Architectural Planning"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] overflow-hidden shadow-2xl rounded-3xl border-[10px] border-bg z-10">
              <img
                src="/images/home2.png"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                alt="Interior Redesign"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-6 lg:space-y-8" data-aos="fade-left" data-aos-duration="1000">
            <div className="flex flex-col space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text font-serif leading-[1.2]">
                Crafting High-End Spaces, Transforming Journeys
              </h2>
            </div>

            <p className="text-text/80 text-base leading-relaxed font-light">
              We specialize in crafting interiors that blend beauty and function, tailored to reflect your unique
              personality. From high-end residential designs to innovative commercial environments, our architecture
              represents bespoke quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <i className="fa-solid fa-compass-drafting"></i>
                </span>
                <div>
                  <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Innovative Planning</h4>
                  <p className="text-xs text-text/70 mt-1 leading-relaxed">
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

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-4 bg-primary hover:bg-gold text-white hover:text-dark px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-2xl group/btn shadow-xl"
              >
                More About Us{' '}
                <i className="fa-solid fa-arrow-right transition-transform group-hover/btn:translate-x-1.5"></i>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-12 md:mt-16 lg:mt-20 bg-primary text-white rounded-3xl py-12 px-6 md:px-12 shadow-2xl relative overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark/30 to-transparent pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-4 text-center items-center">
            <div className="flex flex-col items-center justify-center space-y-2 lg:border-r lg:border-white/10 py-2">
              <StatCount targetValue={10} isPercentage={false} />
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-white/70 font-medium">
                Years Of Experience
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 lg:border-r lg:border-white/10 py-2">
              <StatCount targetValue={250} isPercentage={false} />
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-white/70 font-medium">
                Projects Completed
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 lg:border-r lg:border-white/10 py-2">
              <StatCount targetValue={15} isPercentage={false} />
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-white/70 font-medium">
                Design Awards
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 py-2">
              <StatCount targetValue={100} isPercentage={true} />
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-white/70 font-medium">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
