import React from 'react';
import { Column, H1, Paragraph, RocketIcon, Row, styled } from '@mpkelly/ui';
import { Mockup } from './Mockup';
import { ReactLogo } from './techstack/ReactLogo';
import { TypeScriptLogo } from './techstack/TypeScriptLogo';
import { GitHubLogo } from './techstack/GitHubLogo';

const Root = styled('section', Column, {
  width: '$content',
  p: '$xl',
});

const Intro = styled(H1, {
  fontSize: '$2xl',
  span: {
    textDecoration: 'underline',
    textDecorationColor: '$accent-1',
  },
});

const Header = styled(Row, {
  gap: '$xl',
  alignItems: 'center',
});

const TechStack = styled(Row, {
  justifyContent: 'center',
  gap: '$xl',
  my: '$xl',
  svg: {
    width: 80,
    height: 'auto',
    g: {
      stroke: '$text-1',
    },
    circle: {
      fill: '$text-1',
    },
  },
});

const MockupRoot = styled(Row, { flex: 1 });

export const IntroSection = () => {
  return (
    <Root>
      <Header>
        <Intro>
          Hey, I'm Mike. A <span>creative frontend developer</span> who can turn
          rough sketches or wireframes into <span>beautiful UIs</span>.
        </Intro>
        <MockupRoot id={'mockup'}>
          <Mockup />
        </MockupRoot>
      </Header>
      <TechStack>
        <ReactLogo />
        <TypeScriptLogo />
        <GitHubLogo />
      </TechStack>
      <Paragraph>
        Are you a startup trying to shorten your design process? Or maybe you
        don't even have a designer yet? I can be depended on to delivery visual
        appealing user interfaces at speed.
        <RocketIcon />
      </Paragraph>
    </Root>
  );
};
