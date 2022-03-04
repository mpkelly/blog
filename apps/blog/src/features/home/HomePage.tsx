import React from 'react';
import { IntroSection } from './intro/IntroSection';
import { TilesSection } from './tiles/TilesSection';
import { OutlineSection } from './outline/OutlineSection';
import { OutroSection } from './outro/OutroSection';

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <TilesSection />
      <OutlineSection />
      <OutroSection />
    </>
  );
};
