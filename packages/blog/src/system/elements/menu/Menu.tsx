import {
  Menu as ReakitMenu,
  MenuProps,
  MenuItem as ReakitMenuItem,
  MenuItemProps,
  MenuSeparator as ReakitMenuSeparator,
  MenuSeparatorProps,
  MenuButton as ReakitMenuButton,
  MenuButtonProps,
} from 'reakit';
import { createJsxElement } from '../Element';

export const MenuButton = createJsxElement<
  HTMLButtonElement,
  Partial<MenuButtonProps>
>(ReakitMenuButton, 'menubutton');

export const Menu = createJsxElement<HTMLDivElement, Partial<MenuProps>>(
  ReakitMenu,
  'menu'
);

export const MenuItem = createJsxElement<
  HTMLDivElement,
  Partial<MenuItemProps>
>(ReakitMenuItem, 'menuitem');

export const MenuSeparator = createJsxElement<
  HTMLDivElement,
  Partial<MenuSeparatorProps>
>(ReakitMenuSeparator, 'menuseparator');

export { useMenuState } from 'reakit';
