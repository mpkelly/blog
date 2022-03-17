import { Link, Row, styled } from '@mpkelly/ui';
import { NavLink as RRNavLink } from 'react-router-dom';

const Nav = styled(Row, {
  width: '$content',
  p: '$xl',
});

const Right = styled(Row, {
  ml: 'auto',
  justifyContent: 'flex-end',
  gap: '$lg',
});

export const NavLink = styled(RRNavLink, Link);

export const Navigation = () => {
  return (
    <Nav>
      <NavLink to={'/'}>Mike Kelly</NavLink>
      <Right>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink id={'sketches-link'} to={'/sketches'}>
          Sketches
        </NavLink>
        <NavLink to={'/articles'}>Articles</NavLink>
        <NavLink to={'/resume'}>Resume</NavLink>
      </Right>
    </Nav>
  );
};
