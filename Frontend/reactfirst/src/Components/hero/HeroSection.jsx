import React from 'react';
import HeroContainer from './HeroContainer';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const HeroSection = ({ pic, children }) => {
  return (
    <HeroContainer>
      <HeroImage src={pic} /> {/* Render HeroImage directly */}
      <HeroText delay={200}>
        {children} {/* Access all child content within HeroText */}
      </HeroText>
    </HeroContainer>
  );
};

export default HeroSection;