import React from 'react';
import AboutHero from '../components/about-hero';
import AboutMission from '../components/about-mission';
import AboutStory from '../components/about-story';

const About = () => {
  return (
    <main className="page-main">
      <AboutHero />
      <AboutMission />
      <AboutStory />
    </main>
  );
};

export default About;