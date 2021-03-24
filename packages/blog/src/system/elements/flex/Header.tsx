import { createElement } from '../Element';
import { FlexRow } from './Row';

export const Header = createElement<HTMLDivElement>('header', 'header', {
  defaultStyle: FlexRow,
});
