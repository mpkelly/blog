import React from 'react';
import { Column, H1, Paragraph, Row, Text, styled, Link } from '@mpkelly/ui';
import { ServiceNotOffered, ServiceOffered } from './ServiceOffered';

const Root = styled('section', Column, {
  width: '100%',
  minHeight: 1000,
  alignItems: 'center',
  p: '$xl',
  gap: '$xxl',
  bg: '$neutral-2',
  color: '$primary-5',
});

const Content = styled(Column, {
  width: '$content',
  gap: '$xl',
});

const Intro = styled(Column);

const Title = styled(H1);

const SubTitle = styled(Paragraph, {
  color: '$text-4',
});

const Services = styled(Row, {
  width: '100%',
  flexWrap: 'wrap',
  gap: '$xl',
  justifyContent: 'space-between',
  mt: '$xl',
});

const FinalWord = styled(Text, {
  color: '$text-3',
  fontSize: '$lg',
  alignSelf: 'flex-start',
  mt: '$xl',
});

export const OutlineSection = () => {
  return (
    <Root>
      <Content>
        <Intro>
          <Title>What services do I offer?</Title>
          <SubTitle>
            First and foremost I am a frontend developer who can add value from
            day one. However, I also have a more creative streak and really love
            to have some freedom when it comes to the UI styling.{' '}
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

        <FinalWord>
          Still not convinced? Read some of{' '}
          <Link href={'#'} inline>
            my short thoughts
          </Link>{' '}
          on various aspects of frontend development
        </FinalWord>
      </Content>
    </Root>
  );
};
