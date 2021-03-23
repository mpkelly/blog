import React from 'react';
import { LabelItem } from './LabelItem';
import { Text } from 'elements/text/Text';
import {
  Toolbar,
  ToolbarItem,
  useToolbarState,
} from 'elements/toolbar/Toolbar';
import { Element } from 'system/Element';
import { Row } from 'elements/flex/Row';
import { Icon } from 'elements/icon/Icon';
import { Column } from 'elements/flex/Column';

const Style: Element = {
  flexDirection: 'column',
  width: '100%',
  overflowY: 'hidden',
};

const LabelListStyle: Element = {
  overflowY: 'auto',
};

const LabelStyle = {
  marginTop: 'md',
  marginLeft: 'lg',
};

const AddButtonStyle: Element = {
  marginLeft: 'auto',
  marginRight: 'md',
};

export const Labels = () => {
  const toolbar = useToolbarState({ loop: true });
  return (
    <Toolbar xs={Style} {...toolbar}>
      <Row>
        <Text modifiers={'label'} xs={LabelStyle}>
          Labels
        </Text>
        <ToolbarItem {...toolbar} xs={AddButtonStyle}>
          <Icon name={'add'} modifiers={'small'} />
        </ToolbarItem>
      </Row>
      <Column xs={LabelListStyle}>
        <LabelItem name={'Work'} color={'label.1'} {...toolbar} />
        <LabelItem name={'Programming'} color={'label.2'} {...toolbar} />
        <LabelItem name={'Vacation'} color={'label.3'} {...toolbar} />
        <LabelItem name={'Science'} color={'label.4'} {...toolbar} />
        <LabelItem name={'Movies'} color={'label.5'} {...toolbar} />
        <LabelItem name={'Subscriptions'} color={'label.6'} {...toolbar} />
        <LabelItem name={'Food'} color={'label.7'} {...toolbar} />
      </Column>
    </Toolbar>
  );
};
