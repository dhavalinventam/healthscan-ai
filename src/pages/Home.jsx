import React from 'react';
import Hero from '../components/hero';
import StepProcess from '../components/step-process';
import WhyChoose from '../components/why-choose';
import SupportedReports from '../components/supported-reports';
import HowItWorks from '../components/how-it-works';
import Testimonials from '../components/testimonials';
import Faq from '../components/faq';
import Cta from '../components/cta';

const Home = () => {
  return (
    <main>
      <Hero />
      <StepProcess />
      <WhyChoose />
      <SupportedReports />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Cta />
    </main>
  );
};

export default Home;