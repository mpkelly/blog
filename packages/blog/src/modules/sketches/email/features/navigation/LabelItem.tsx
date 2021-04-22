import React from 'react';
import { Icon } from 'elements/icon/Icon';
import { Text } from 'elements/text/Text';
import { ToolbarItem, ToolbarItemProps } from 'elements/toolbar/Toolbar';
import { Element } from 'elements/Element';
import { Button } from 'elements/button/Button';

type Props = {
  color: string;
  name: string;
} & ToolbarItemProps;

export const LabelItem = (props: Props) => {
  const { color, name, ...rest } = props;
  return (
    <ToolbarItem xs={Style} {...rest}>
      <Icon name={'label'} xs={{ color }} />
      <Text xs={TextStyle}>{name}</Text>
      <Button data-id={'remove-label'} modifiers={'clear'}>
        <Icon name={'remove'} modifiers={'small'} />
      </Button>
    </ToolbarItem>
  );
};

const Style: Element = {
  alignItems: 'center',
  height: 'navitem.height',
  padding: 'lg',
  '[data-id=remove-label]': {
    marginLeft: 'auto',
    display: 'none',
  },
  '&:hover [data-id=remove-label]': {
    display: 'block',
  },
};

const TextStyle = {
  marginLeft: 'md',
};
