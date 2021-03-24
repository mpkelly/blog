import { createElement } from '../Element';
import { FlexRow } from '../flex/Row';

export const Separator = createElement<HTMLDivElement>(
  'div',
  'separator',
  FlexRow
);
