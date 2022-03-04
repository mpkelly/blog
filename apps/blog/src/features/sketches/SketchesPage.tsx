import React from 'react';
import { Column, ImageIcon, styled } from '@mpkelly/ui';
import { PageTitle } from '../../components/PageTitle';
import { SketchItem } from './SketchItem';
import { NavLink as RRNavLink } from 'react-router-dom';

const Root = styled(Column, {
  size: '100%',
  alignItems: 'center',
});

const Content = styled('section', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
});

export const NavLink = styled(RRNavLink, {
  color: 'inherit',
  textDecoration: 'none',
});

export const SketchesPage = () => {
  return (
    <Root>
      <Content>
        <PageTitle title={'Sketches'} />
        <NavLink to={'/sketches/checkout'}>
          <SketchItem
            title={'Checkout sketch'}
            description={lorem}
            preview={<ImageIcon size={'3xl'} />}
          />
        </NavLink>
        <NavLink to={'checkout2'}>
          <SketchItem
            title={'Checkout sketch'}
            description={lorem}
            preview={<ImageIcon size={'3xl'} />}
          />
        </NavLink>
      </Content>
    </Root>
  );
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
