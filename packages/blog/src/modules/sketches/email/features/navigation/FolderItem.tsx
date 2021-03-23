import React from 'react';
import { Element } from 'system/Element';
import { Icon } from 'elements/icon/Icon';
import { Badge } from 'elements/badge/Badge';
import { Text } from 'elements/text/Text';
import { ToolbarItem, ToolbarItemProps } from 'elements/toolbar/Toolbar';

type Props = {
  icon: string;
  name: string;
  count?: number;
  selected?: boolean;
  badgeModifiers?: string;
} & ToolbarItemProps;

const ItemStyle: Element = {
  alignItems: 'center',
  height: 'navitem.height',
  padding: 'lg',
  marginTop: 'sm',
  marginBottom: 'sm',
};

const TextStyle: Element = {
  marginLeft: 'lg',
};

const BadgeStyle: Element = {
  marginLeft: 'auto',
};

export const FolderItem = (props: Props) => {
  const { icon, name, count, selected, badgeModifiers = '', ...rest } = props;
  return (
    <ToolbarItem xs={ItemStyle} data-selected={selected} {...rest}>
      <Icon name={icon} />
      <Text xs={TextStyle}>{name}</Text>
      {count && (
        <Badge xs={BadgeStyle} modifiers={badgeModifiers}>
          {count}
        </Badge>
      )}
    </ToolbarItem>
  );
};
