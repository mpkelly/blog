import React from 'react';
import { IntroSection } from './intro/IntroSection';
import { TilesSection } from './tiles/TilesSection';
import { OutlineSection } from './outline/OutlineSection';

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <TilesSection />
      <OutlineSection />
    </>
  );
};
