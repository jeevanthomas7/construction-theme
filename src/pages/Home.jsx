import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import WhatWeDo from '../components/sections/WhatWeDo';
import VideoSection from '../components/sections/VideoSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import LatestSection from '../components/sections/LatestSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FaqSection from '../components/sections/FaqSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <VideoSection />
      <WhyChooseUs />
      <LatestSection />
      <TestimonialSection />
      <FaqSection />
    </>
  );
}
