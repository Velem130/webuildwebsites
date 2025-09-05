import React from 'react';
import Hero from '../components/Hero';
import FAQs from '../components/FAQs';
import Menu from '../components/Menu';
import Hero2 from '../components/Hero2';
import SpecialSection from '../components/SpecialSection';
import OurFocus from '../components/OurFocus';
import Testimonials from '../components/Testimonials';


const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <SpecialSection />
      <Menu />
      <FAQs />
      <OurFocus />
      <Testimonials />
    

    </>
  );
};

export default Home;
