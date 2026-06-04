import React, { useState, useEffect, useRef } from 'react';
import WhyChooseUs from '../components/sections/home2/WhyChooseUs';
import Testimonial from '../components/sections/home2/Testimonial';
import Faq from '../components/sections/home2/Faq';

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
  const team = [
    { img: 't1.jpg', name: 'Ar. Madhavan Nair', role: 'Chief Architect' },
    { img: 't3.jpg', name: 'Er. Sandeep Menon', role: 'Senior Civil Engineer' },
    { img: 't2.jpg', name: 'Anjana Krishnan', role: 'Lead Interior Designer' },
    { img: 't1.jpg', name: 'Faisal Rahman', role: 'Project Director' },
  ];

  return (
    <>
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
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <i className="fa-solid fa-helmet-safety"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Turnkey Delivery</h4>
                    <p className="text-xs text-text/70 mt-1 leading-relaxed">
                      From initial ground-breaking to handover, we manage it all.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                    <i className="fa-solid fa-shield-halved"></i>
                  </span>
                  <div>
                    <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Lifetime Quality</h4>
                    <p className="text-xs text-text/70 mt-1 leading-relaxed">
                      Strict quality checkpoints ensure lifelong structural safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 md:mt-16 lg:mt-20 bg-primary text-white rounded-3xl py-12 px-6 md:px-12 relative overflow-hidden"
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

      <WhyChooseUs />

      <section className="relative pt-20 md:pt-16 lg:pt-20 overflow-hidden font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7 lg:mb-12"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-xs mb-3 block uppercase">
                Our Experts
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-dark tracking-tight leading-tight">
                Meet Our Creative Team
              </h2>
            </div>
            <div className="hidden md:block max-w-[300px] text-right">
              <p className="text-text/60 text-sm leading-relaxed font-medium">
                A dedicated team of certified architects, structural engineers, and luxury interior craftsmen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-duration="1000">
            {team.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white p-4 rounded-[1rem] lg:rounded-[2rem] border border-gold/50 transition-all duration-500 group h-full"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[1.5rem] z-0">
                  <img
                    src={`/images/charaters/${item.img}`}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-dark text-white flex items-center justify-center transition-all duration-300"
                    >
                      <i className="fa-brands fa-linkedin-in text-sm"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-dark text-white flex items-center justify-center transition-all duration-300"
                    >
                      <i className="fa-brands fa-instagram text-sm"></i>
                    </a>
                  </div>
                </div>

                <div className="pt-6 pb-2 text-left leading-none pl-2">
                  <h4 className="font-serif text-lg sm:text-xl text-dark leading-none group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                  <span className="text-primary text-[9px] uppercase tracking-[0.2em] font-bold mt-2.5 block leading-none">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />
      <Faq />
    </>
  );
}
