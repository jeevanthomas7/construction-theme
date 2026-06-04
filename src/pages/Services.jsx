import React from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/sections/FaqSection';

export default function Services() {
  const services = [
    {
      img: '1.jpg',
      title: 'Plan',
      desc: 'We create initial sketches and concepts that align with your personal style and practical requirements.',
    },
    {
      img: '2.jpg',
      title: 'Estimates',
      desc: 'We present a comprehensive proposal that clearly defines the project scope, schedule, and costs.',
    },
    {
      img: '3.jpg',
      title: 'Permit',
      desc: 'We oversee the submission of permit applications and obtain all essential local municipal approvals.',
    },
    {
      img: '4.jpg',
      title: 'Supervision',
      desc: 'We make sure that the project advances according to schedule, maintaining top quality standards.',
    },
    {
      img: '5.jpg',
      title: 'Construction',
      desc: 'Our proficient construction team executes the blueprint focusing on detail, quality, and safety.',
    },
    {
      img: '6.jpg',
      title: 'Residential Design',
      desc: 'Bespoke home plans, space mapping, and interior designs completely tailored around your lifestyle.',
    },
  ];

  return (
    <>
      <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1000">
            {services.map((item, idx) => {
              const detailUrl = `/services-detail?title=${encodeURIComponent(item.title)}&img=${encodeURIComponent(
                item.img
              )}&desc=${encodeURIComponent(item.desc)}`;

              return (
                <Link
                  key={idx}
                  to={detailUrl}
                  className="flex flex-col bg-white border border-gray-300 transition-all duration-300 rounded-[1rem] lg:rounded-[2rem] overflow-hidden group h-full"
                >
                  <div className="w-full h-[280px] sm:h-[300px] overflow-hidden bg-gray-50 p-3 shrink-0">
                    <img
                      src={`/images/services/${item.img}`}
                      className="w-full h-full rounded-2xl lg:rounded-3xl object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      alt={item.title}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3 text-left">
                      <h3 className="font-bold text-text text-lg group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-text/70 text-sm sm:text-base leading-relaxed line-clamp-3 font-light">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-100 mt-6 text-left">
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300">
                        Learn More <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1.5"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
