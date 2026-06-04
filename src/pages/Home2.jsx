import React from 'react';
import Hero from '../components/sections/home2/Hero';
import About from '../components/sections/home2/About';
import WhatWeDo from '../components/sections/home2/WhatWeDo';
import Video from '../components/sections/home2/Video';
import Latest from '../components/sections/home2/Latest';
import WhyChooseUs from '../components/sections/home2/WhyChooseUs';
import Testimonial from '../components/sections/home2/Testimonial';
import Faq from '../components/sections/home2/Faq';

export default function Home2() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Video />
      <Latest />
      <WhyChooseUs />
      <Testimonial />
      <Faq />
    </>
  );
}
