import { createElement } from '../Element';
import { FlexRow } from './Row';

export const Footer = createElement<HTMLDivElement>('footer', 'footer', {
  defaultStyle: FlexRow,
});
