import { createJsxElement } from 'system/Element';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const Link = createJsxElement<HTMLAnchorElement, NavLinkProps>(
  //TODO more type issues
  NavLink as any,
  'navlink',
  {
    textDecoration: 'none',
  }
);
