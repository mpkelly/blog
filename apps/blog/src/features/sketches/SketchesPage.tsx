import React from 'react';
import { Column, Paragraph, styled } from '@mpkelly/ui';
import { PageTitle } from '../../components/PageTitle';
import { SketchItem } from './SketchItem';
import { NavLink as RRNavLink } from 'react-router-dom';
import { PreviewImage } from './PreviewImage';

const Root = styled(Column, {
  size: '100%',
  alignItems: 'center',
});

const Content = styled('section', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
});

const Intro = styled(Column, {
  gap: '$md',
});

const SubTitle = styled(Paragraph, {});

export const NavLink = styled(RRNavLink, {
  color: 'inherit',
  textDecoration: 'none',
});

export const SketchesPage = () => {
  return (
    <Root>
      <Content>
        <Intro>
          <PageTitle title={'Sketches'} />
          <SubTitle>
            Sketches are UI mockups made with code. I find I can work quicker
            using React with a themed component library than I can with tools
            like Sketch of Figma. Below is a sample of my work.
          </SubTitle>
          <SubTitle>
            Need a developer on your team who can create aesthetically appealing
            UIs like this quickly? Let's talk.
          </SubTitle>
        </Intro>

        <NavLink to={'/sketches/email'}>
          <SketchItem
            title={'Email app inbox'}
            description={
              <>
                An email client inbox that uses a simple dark colour palette.
                It's uses <code>Source Sans Pro</code> and <code>Lora</code>{' '}
                fonts along with Microsoft's <code>Fluent</code> icon set.
              </>
            }
            preview={<PreviewImage src={'/assets/sketches/email.png'} />}
          />
        </NavLink>

        <NavLink to={'/sketches/foodapp-signup'}>
          <SketchItem
            title={'Food app sign-up page'}
            description={
              <>
                A simple sign-up page for a fictitious food delivery company. It
                uses <code>Poppins</code> font. This is an example of what I can
                do in an hour.
              </>
            }
            preview={<PreviewImage src={'/assets/sketches/eatstreet.png'} />}
          />
        </NavLink>
      </Content>
    </Root>
  );
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
