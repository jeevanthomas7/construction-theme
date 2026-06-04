import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: 'What services does Cubic Builders provide?',
      a: 'We offer complete end-to-end design-build services, including architectural planning, structural/MEP drafting, municipal permitting, budget estimation, project supervision, and complete turnkey construction.',
    },
    {
      q: 'How do you manage construction cost estimates?',
      a: 'Our estimating process takes into account your site location, material choices, design complexity, and permit fees. We present a detailed, itemized quotation based on your approved budget, with zero hidden costs.',
    },
    {
      q: 'Do you handle municipal permit approvals?',
      a: 'Yes. Our qualified team of engineers and draftsmen manages the entire application process, working directly with municipal or panchayat officials to secure all essential structural and safety permits.',
    },
    {
      q: 'What is your typical project timeline?',
      a: 'Timelines depend on design complexity and scale. Generally, residential planning and permitting take 4 to 8 weeks, while the turnkey construction phase ranges between 8 to 14 months.',
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-14"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
              Any Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-dark font-serif leading-[1.15] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-text/80 text-base leading-relaxed font-light max-w-sm">
            Find clear answers to common inquiries regarding our complete turnkey design-build processes, estimations,
            and project timelines.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-6">
            {faqs.slice(0, 2).map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFaq(idx)}
                  className="faq-item bg-bg/40 border border-primary/15 p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl group cursor-pointer"
                >
                  <button className="faq-toggle flex items-center justify-between w-full text-left focus:outline-none">
                    <span className="font-bold text-dark text-base sm:text-lg group-hover:text-primary transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="faq-icon flex items-center justify-center w-8 h-8 rounded-full bg-white text-dark shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 ml-4">
                      <i
                        className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </span>
                  </button>
                  <div
                    className="faq-content overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  >
                    <p className="text-text/70 text-sm sm:text-base leading-relaxed pt-4 font-light">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-6">
            {faqs.slice(2, 4).map((faq, idx) => {
              const realIdx = idx + 2;
              const isOpen = activeIndex === realIdx;
              return (
                <div
                  key={realIdx}
                  onClick={() => toggleFaq(realIdx)}
                  className="faq-item bg-bg/40 border border-primary/15 p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl group cursor-pointer"
                >
                  <button className="faq-toggle flex items-center justify-between w-full text-left focus:outline-none">
                    <span className="font-bold text-dark text-base sm:text-lg group-hover:text-primary transition-colors duration-200">
                      {faq.q}
                    </span>
                    <span className="faq-icon flex items-center justify-center w-8 h-8 rounded-full bg-white text-dark shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 ml-4">
                      <i
                        className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </span>
                  </button>
                  <div
                    className="faq-content overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  >
                    <p className="text-text/70 text-sm sm:text-base leading-relaxed pt-4 font-light">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
