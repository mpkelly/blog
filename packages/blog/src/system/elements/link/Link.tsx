import { createElement } from 'elements/Element';
import { AnchorHTMLAttributes } from 'react';

export const Link = createElement<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>('a', 'link');
