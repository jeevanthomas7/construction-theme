import React, { useState } from 'react';

export default function FaqSection() {
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
      q: 'Do you handle municipal or panchayat permit approvals?',
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
    <section className="relative pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-24 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-3 lg:space-y-8" data-aos="fade-right" data-aos-duration="800">
            <div className="flex flex-col space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary">Any Questions?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text font-serif leading-[1.2]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col border-t border-gray-200">
              {faqs.map((faq, idx) => {
                const isOpen = activeIndex === idx;
                return (
                  <div key={idx} className="faq-item border-b border-gray-100 py-5 group">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="faq-toggle flex items-center justify-between w-full text-left focus:outline-none"
                    >
                      <span className="font-bold text-dark text-base sm:text-lg group-hover:text-primary transition-colors duration-200">
                        {faq.q}
                      </span>
                      <span className="faq-icon flex items-center justify-center w-8 h-8 rounded-full bg-bg border border-gray-200 text-dark group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 ml-4">
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
                      <p className="text-text/80 text-sm sm:text-base leading-relaxed pt-3 pb-2 font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center" data-aos="fade-left" data-aos-duration="800">
            <div className="relative w-full aspect-[4/3] sm:max-w-[450px] lg:max-w-none overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] shadow-xl">
              <img src="/images/faq.png" className="w-full h-full object-cover" alt="Architectural Consultation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
