import { createElement, Element } from '../Element';
import { SizeAlias, SizeAliasProps } from 'system/aliases/SizeAlias';

export const FlexRow: Element = { display: 'flex' };

export const Row = createElement<HTMLDivElement, {}, SizeAliasProps>(
  'div',
  'row',
  {
    defaultStyle: FlexRow,
    aliases: [SizeAlias],
  }
);
