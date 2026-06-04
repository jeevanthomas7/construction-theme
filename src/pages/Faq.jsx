import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState('planning-0');
  const [activeCat, setActiveCat] = useState('planning');

  const categories = [
    { id: 'planning', label: 'Planning & Design' },
    { id: 'estimation', label: 'Estimation & Costing' },
    { id: 'permits', label: 'Municipal Permits' },
    { id: 'construction', label: 'Turnkey Construction' },
  ];

  const sections = {
    planning: {
      title: 'Planning & Design',
      items: [
        {
          q: 'Can I bring my own sketches for custom designs?',
          a: 'Absolutely. You can work with our architectural designers to translate your ideas, references, or raw sketches into technically precise blueprints and beautiful 3D renderings.',
        },
        {
          q: 'What architectural details are included in your plans?',
          a: 'Our construction-ready designs encompass complete space floor plans, detailed 3D elevations, structural diagrams, electrical grids, and plumbing layouts.',
        },
      ],
    },
    estimation: {
      title: 'Estimation & Costing',
      items: [
        {
          q: 'How are project construction expenses estimated?',
          a: 'We calculate expenses based on site location, local labor/permitting fees, design complexity, and material grades. We present an itemized, transparent quotation with zero hidden fees.',
        },
        {
          q: 'Can I modify materials or design if it exceeds my budget?',
          a: 'Yes. Before signing the contract, you can adjust materials, layouts, or building methods. We will iterate the plans until they match your financial limitations and project needs.',
        },
      ],
    },
    permits: {
      title: 'Municipal Permits',
      items: [
        {
          q: 'Do you handle the municipal panchayat permit applications?',
          a: 'Yes. Our in-house team of qualified engineers and draftsmen manages the entire application process, working directly with municipal or panchayat officials to secure all essential structural and safety permits.',
        },
        {
          q: 'How long does the permitting process typically take?',
          a: 'Depending on local municipality regulations and panchayat offices, permit verification and approvals usually take between 4 to 8 weeks.',
        },
      ],
    },
    construction: {
      title: 'Turnkey Construction',
      items: [
        {
          q: 'What guarantees do you provide for structural quality?',
          a: 'We strictly follow Indian Standard (IS) codes for all reinforced concrete and structural work. Continuous on-site supervision and multi-phase quality audits guarantee structural safety.',
        },
        {
          q: 'What is the typical timeline for turnkey construction?',
          a: 'Depending on the design complexity and scale, complete residential construction from site preparation to final key handover ranges between 8 to 14 months.',
        },
      ],
    },
  };

  const handleFaqToggle = (key) => {
    setActiveFaq(activeFaq === key ? null : key);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-24 items-start w-full">
          <aside className="w-full space-y-8 order-2 lg:order-1 lg:sticky lg:top-24">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-300 shadow-sm text-left">
              <span className="text-gold text-[10px] font-bold tracking-widest mb-8 block opacity-70 uppercase">
                Categories
              </span>
              <nav className="flex flex-col gap-3">
                {categories.map((cat) => {
                  const isActive = activeCat === cat.id;
                  return (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      onClick={() => setActiveCat(cat.id)}
                      className={`flex items-center justify-between p-5 rounded-2xl text-[13px] font-bold tracking-wide transition-all ${
                        isActive
                          ? 'bg-primary text-white shadow-xl'
                          : 'text-dark/60 border border-gray-200 hover:bg-primary/5'
                      }`}
                    >
                      {cat.label} <i className="fas fa-chevron-right text-[11px]"></i>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="p-8 rounded-[2.5rem] relative overflow-hidden group hidden lg:block text-center border border-gray-300">
              <div className="relative rounded-3xl overflow-hidden mb-8 aspect-square border-4 border-white/10">
                <img src="/images/slide3.png" className="w-full h-full object-cover transition-all duration-1000" alt="Consultation" />
              </div>
              <h4 className="text-2xl text-text font-serif mb-6 leading-tight">Expert Consultation</h4>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-primary uppercase tracking-widest text-white px-10 py-5 rounded-2xl hover:bg-gold hover:text-dark transition-all text-[13px] font-bold w-full justify-center shadow-lg border border-white/10"
              >
                <span>Contact Us</span>
                <i className="fas fa-paper-plane text-[10px]"></i>
              </Link>
            </div>
          </aside>

          <div className="order-1 lg:order-2 w-full space-y-12 lg:space-y-15">
            {Object.entries(sections).map(([key, section]) => (
              <div key={key} id={key} className="scroll-mt-32">
                <h2 className="text-3xl md:text-5xl text-dark font-serif mb-5 sm:mb-7 flex items-center gap-4 text-left">
                  {section.title.split(' ')[0]} <span className="font-light text-primary">{section.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, idx) => {
                    const faqKey = `${key}-${idx}`;
                    const isOpen = activeFaq === faqKey;
                    return (
                      <div
                        key={idx}
                        className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                          isOpen ? 'bg-primary border-primary shadow-xl' : 'bg-white border-gray-200 hover:border-primary/30'
                        }`}
                      >
                        <button
                          onClick={() => handleFaqToggle(faqKey)}
                          className="w-full flex items-center justify-between p-8 text-left outline-none"
                        >
                          <span
                            className={`text-lg md:text-xl font-serif tracking-tight ${
                              isOpen ? 'text-white' : 'text-dark'
                            }`}
                          >
                            {item.q}
                          </span>
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                              isOpen ? 'bg-white/10' : 'bg-bg'
                            }`}
                          >
                            <i
                              className={`fas text-[10px] ${
                                isOpen ? 'fa-minus text-white' : 'fa-plus text-primary'
                              }`}
                            ></i>
                          </div>
                        </button>
                        <div
                          className={`px-8 pb-8 -mt-2 transition-all duration-300 ${
                            isOpen ? 'block' : 'hidden'
                          }`}
                        >
                          <p
                            className={`font-medium text-base leading-relaxed border-t pt-6 ${
                              isOpen ? 'text-white/70 border-white/10' : 'text-text/70 border-gray-200'
                            }`}
                          >
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
