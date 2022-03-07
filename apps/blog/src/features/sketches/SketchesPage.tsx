import React from 'react';
import { Column, ImageIcon, Paragraph, styled } from '@mpkelly/ui';
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
            Sketches are UI mockups that have been made using code instead of
            tools like Sketch or Figma. The code is <u>very rough</u> and not
            production-grade - the goal is simply to find layouts and styles
            that work before re-implementing the UI in a real app. Each Sketch
            has a set of primitive components for Icons, Text and Flexbox etc.
            which are connected to a theme so I can make sweeping changes easily
            and iterate quickly.
          </SubTitle>
        </Intro>

        <NavLink to={'/sketches/email'}>
          <SketchItem
            title={'Email app inbox'}
            description={lorem}
            preview={<PreviewImage src={'/assets/sketches/email.png'} />}
          />
        </NavLink>

        <NavLink to={'/sketches/nomadinsurer'}>
          <SketchItem
            title={'Insurance app checkout page'}
            description={
              <>
                A simple checkout page for fictitious insurance company 'Nomad
                Insurer' . It uses <code>Be Vietnam Pro</code> font and{' '}
                <code>Feather</code> icon set. I don't really like it much but
                want to include the good and bad UIs that I make so that clients
                have a more accurate idea of my ability. It did only take me
                several hours and could easily be reworked.{' '}
              </>
            }
            preview={
              <PreviewImage src={'/assets/sketches/nomad_insurer.png'} />
            }
          />
        </NavLink>
      </Content>
    </Root>
  );
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
