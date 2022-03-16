import React from 'react';
import { Column, darkTheme, H1, Paragraph, Row, styled } from '@mpkelly/ui';
import { ServiceNotOffered, ServiceOffered } from './ServiceOffered';

const Root = styled('section', Column, {
  width: '100%',
  minHeight: '100vh',
  alignItems: 'center',
  p: '$xl',
  gap: '$xxl',
  bg: '$bg-2',
  color: '$text-1',
});

const Content = styled(Column, {
  width: '$content',
  gap: '$xl',
});

const Intro = styled(Column);

const Title = styled(H1);

const SubTitle = styled(Paragraph, {
  color: '$text-2',
});

const Services = styled(Row, {
  width: '100%',
  flexWrap: 'wrap',
  gap: '$xl',
  justifyContent: 'space-between',
  mt: '$xl',
});

export const OutlineSection = () => {
  return (
    <Root className={darkTheme}>
      <Content>
        <Intro>
          <Title>What services do I offer?</Title>
          <SubTitle>
            I am primarily a frontend developer but I am also an excellent fit
            for teams or projects that don't have a dedicated designer. I can
            produce visually appealing user interfaces without design input.
          </SubTitle>
        </Intro>

        <Services>
          <ServiceOffered
            description={
              "Code that's easy to read and reason about; code that's well-tested. "
            }
          >
            High-quality coding
          </ServiceOffered>
          <ServiceOffered
            description={
              "I just need clear functional requirements and some rough sketches and I'm good to go."
            }
          >
            Beautiful user interfaces
          </ServiceOffered>
          <ServiceOffered
            description={
              'I can start from zero and build you and app, design system and component library.'
            }
          >
            Design system creation
          </ServiceOffered>
          <ServiceOffered
            description={
              'I have good knowledge of tools and libraries and can setup a first-class project.'
            }
          >
            Enterprise-grade project setup
          </ServiceOffered>

          <ServiceNotOffered
            description={
              'Custom icons are a feature of first-class UIs so I absolutely want to learn this skill.'
            }
          >
            Custom icon design
          </ServiceNotOffered>

          <ServiceNotOffered
            description={
              'Learning icon design naturally leads on to this, so watch this space.'
            }
          >
            Custom illustrations
          </ServiceNotOffered>
        </Services>
      </Content>
    </Root>
  );
};
