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

export const IntroSection = () => {
  return (
    <Root>
      <Row css={{ gap: '$xl', alignItems: 'center' }}>
        <H1
          css={{
            fontSize: 50,
            maxWidth: '50%',
            span: {
              textDecoration: 'underline',
              textDecorationColor: '$accent-1',
            },
          }}
        >
          Hey, I'm Mike. A <span>creative frontend developer</span> who can turn
          rough sketches or wireframes into <span>beautiful UIs</span>.
        </H1>
        <Row
          css={{
            flex: 1,
          }}
        >
          <Mockup />
        </Row>
      </Row>
      <TechStack>
        <ReactLogo />
        <TypeScriptLogo />
        <GitHubLogo />
      </TechStack>
      <Paragraph>
        Are you a startup trying to shorten your design process? Or maybe you
        don't even have a designer yet? I can be depended on to delivery
        fantastic user interfaces at speed.
        <RocketIcon />
      </Paragraph>{' '}
    </Root>
  );
};
