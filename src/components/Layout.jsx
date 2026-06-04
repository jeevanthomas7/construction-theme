import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ContactModal from './ContactModal';
import Banner from './Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Initialize AOS and GLightbox
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
    });
    return () => lightbox.destroy();
  }, [pathname]);

  const isHome = pathname === '/' || pathname === '/home2';

  // Determine banner title and background
  let bannerTitle = '';
  let bannerBg = '/images/slide3.png';

  if (pathname === '/about') {
    bannerTitle = 'About Us';
    bannerBg = '/images/slide3.png';
  } else if (pathname === '/services') {
    bannerTitle = 'Our Services';
    bannerBg = '/images/slide3.png';
  } else if (pathname === '/services-detail') {
    bannerTitle = 'Service Detail';
    bannerBg = '/images/slide3.png';
  } else if (pathname === '/gallery') {
    bannerTitle = 'Our Gallery';
    bannerBg = '/images/slide3.png';
  } else if (pathname === '/faq') {
    bannerTitle = 'Frequently Asked Questions';
    bannerBg = '/images/slide3.png';
  } else if (pathname === '/contact') {
    bannerTitle = 'Contact Us';
    bannerBg = '/images/slide3.png';
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-bg text-text">
      <Header />
      {!isHome && <Banner title={bannerTitle} backgroundImage={bannerBg} />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <ContactModal />
    </div>
  );
}
