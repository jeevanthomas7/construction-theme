import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import FaqSection from '../components/sections/FaqSection';

export default function ServiceDetail() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title') || 'Service Details';
  const img = searchParams.get('img') || '1.jpg';
  const desc =
    searchParams.get('desc') ||
    'We specialize in crafting interiors that blend beauty and function, tailored to reflect your unique personality. From high-end residential designs to innovative commercial environments, our architecture represents bespoke quality.';

  return (
    <>
      <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
            <div className="lg:col-span-8 flex flex-col space-y-8" data-aos="fade-right" data-aos-duration="1000">
              <div className="w-full h-[320px] sm:h-[450px] overflow-hidden rounded-[2.5rem] shadow-lg relative">
                <img src={`/images/services/${img}`} className="w-full h-full object-cover" alt={title} />
                <div className="absolute inset-0 bg-dark/10"></div>
              </div>

              <div className="flex flex-col space-y-4 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark font-serif tracking-tight leading-tight">
                  {title} Solutions
                </h2>
                <p className="text-text/80 text-base sm:text-lg leading-relaxed font-light pt-2">
                  {desc} Our dedicated design-build team prioritizes structural integrity, premium material selections,
                  and dynamic space flow to ensure that the completed project represents your absolute design vision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p className="text-text/80 text-sm leading-relaxed font-medium">
                    Bespoke Architectural Blueprints & Detailed 3D Modeling
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p className="text-text/80 text-sm leading-relaxed font-medium">
                    Rigorous On-Site Supervision & Constant Quality Inspections
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p className="text-text/80 text-sm leading-relaxed font-medium">
                    Detailed Material Specifications & Honest Pricing
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                  <p className="text-text/80 text-sm leading-relaxed font-medium">
                    Complete Turnkey Delivery From Permitting to Handover
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-8" data-aos="fade-left" data-aos-duration="1000">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col space-y-6 text-left">
                <h4 className="font-serif text-2xl text-dark leading-none">Our Services</h4>
                <nav className="flex flex-col border-t border-gray-100 pt-4 gap-4 text-sm font-semibold text-text/80">
                  <Link
                    to="/services-detail?title=Plan&img=1.jpg&desc=We+create+initial+sketches+and+concepts+that+align+with+your+personal+style+and+practical+requirements."
                    className="flex items-center justify-between hover:text-gold transition-colors duration-200 py-1"
                  >
                    <span>Plan & Concept Design</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                  <Link
                    to="/services-detail?title=Estimates&img=2.jpg&desc=We+present+a+comprehensive+proposal+that+clearly+defines+the+project+scope%2C+schedule%2C+and+costs."
                    className="flex items-center justify-between hover:text-gold transition-colors duration-200 py-1"
                  >
                    <span>Turnkey Budget Estimates</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                  <Link
                    to="/services-detail?title=Permit&img=3.jpg&desc=We+oversee+the+submission+of+permit+applications+and+obtain+all+essential+local+municipal+approvals."
                    className="flex items-center justify-between hover:text-gold transition-colors duration-200 py-1"
                  >
                    <span>Panchayat/Municipal Permits</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                  <Link
                    to="/services-detail?title=Supervision&img=4.jpg&desc=We+make+sure+that+the+project+advances+according+to+schedule%2C+maintaining+top+quality+standards."
                    className="flex items-center justify-between hover:text-gold transition-colors duration-200 py-1"
                  >
                    <span>Expert Construction Supervision</span>
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                  </Link>
                </nav>
              </div>

              <div className="bg-primary text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-left border border-white/10 flex flex-col gap-5">
                <div className="space-y-2 relative z-10">
                  <h4 className="font-serif text-3xl text-gold leading-none">Need Help?</h4>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light pt-2">
                    Contact our main office to schedule a bespoke consultation with our expert architects and structural
                    engineers.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col gap-3 text-sm font-semibold">
                  <a href="tel:+918129480780" className="flex items-center gap-3 hover:text-gold transition-colors duration-200">
                    <i className="fa-solid fa-phone text-gold"></i>
                    <span>8129480780</span>
                  </a>
                  <a href="mailto:info@cubikbuilders.com" className="flex items-center gap-3 hover:text-gold transition-colors duration-200">
                    <i className="fa-solid fa-envelope text-gold"></i>
                    <span>info@cubikbuilders.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}
