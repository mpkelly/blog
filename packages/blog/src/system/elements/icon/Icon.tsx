import * as React from 'react';
import { Icon as IconData } from '../../icons/IconBundle';
import { createElement, ElementProps } from '../Element';
import { useIcons } from '../../icons/IconProvider';

type Props = {
  name?: string;
} & IconData &
  ElementProps<HTMLSpanElement>;

export const Icon = (props: Props) => {
  let { name, className, ligature: children = '', ...rest } = props;
  const icon = name ? (useIcons() || { icons: {} }).icons[name] : undefined;
  if (icon) {
    className = icon.className || className;
    children = icon.ligature || children;
  }
  return (
    <Element
      children={children as any}
      xs={icon?.xs}
      className={className}
      {...rest}
    />
  );
};

const Element = createElement<HTMLSpanElement>('span', 'icon');
