import { IntroSection } from './intro/IntroSection';
import { Column, styled } from '@mpkelly/ui';

const Root = styled('section', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
});

export const AboutPage = () => {
  return (
    <Root>
      <IntroSection />
    </Root>
  );
};
