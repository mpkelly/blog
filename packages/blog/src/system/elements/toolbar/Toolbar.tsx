import {
  Toolbar as ReakitToolbar,
  ToolbarProps,
  ToolbarItem as ReakitToolbarItem,
  ToolbarItemProps,
} from 'reakit';
import { createJsxElement } from '../Element';
import { FlexRow } from '../flex/Row';

export const Toolbar = createJsxElement<HTMLDivElement, ToolbarProps>(
  ReakitToolbar,
  'toolbar',
  { defaultStyle: FlexRow }
);

export const ToolbarItem = createJsxElement<HTMLDivElement, ToolbarItemProps>(
  ReakitToolbarItem,
  'toolbaritem',
  { defaultStyle: { display: 'inline-flex' } }
);

export { ToolbarProps, ToolbarItemProps };

export { useToolbar, useToolbarState } from 'reakit';
