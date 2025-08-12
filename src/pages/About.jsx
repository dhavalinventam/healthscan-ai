import React from 'react';
import AboutHero from '../components/about-hero';
import AboutMission from '../components/about-mission';
import AboutStory from '../components/about-story';
import AboutTeam from '../components/about-team';
import AboutHowItWorks from '../components/about-how-it-works';
import Cta from '../components/cta';

const About = () => {
  return (
    <main className="page-main">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutTeam />
      <AboutHowItWorks />
      <Cta />
    </main>
  );
};

export default About;