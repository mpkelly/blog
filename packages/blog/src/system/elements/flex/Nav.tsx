import { createElement } from '../Element';
import { FlexRow } from './Row';

export const Nav = createElement<HTMLDivElement>('nav', 'nav', {
  defaultStyle: FlexRow,
});
