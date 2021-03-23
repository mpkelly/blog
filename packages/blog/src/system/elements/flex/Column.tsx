import { Element, createElement } from '../../Element';

export const FlexColumn: Element = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

export const Column = createElement<HTMLDivElement>(
  'div',
  'column',
  FlexColumn
);
