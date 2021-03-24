import { createElement } from '../Element';
import { FlexColumn } from 'elements/flex/Column';

export const Aside = createElement<HTMLDivElement>('aside', 'aside', {
  defaultStyle: FlexColumn,
});
