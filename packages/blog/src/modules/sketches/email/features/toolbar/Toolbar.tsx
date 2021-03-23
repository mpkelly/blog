import React from 'react';
import { Element } from 'system/Element';
import {
  Toolbar as SystemToolbar,
  ToolbarItem,
  useToolbarState,
} from 'elements/toolbar/Toolbar';
import { Icon } from 'elements/icon/Icon';

const ToolbarStyle: Element = {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: 'toolbar.width',
  borderRight: '1px solid',
  borderRightColor: 'border.1',
};

const LogoStyle: Element = {
  position: 'absolute',
  top: 36,
};

const ToolbarItemStyle = {
  marginTop: 'md',
  marginBottom: 'md',
};

const LogoutStyle: Element = {
  position: 'absolute',
  bottom: 16,
};

export const Toolbar = () => {
  const toolbar = useToolbarState({ loop: true });
  return (
    <SystemToolbar {...toolbar} xs={ToolbarStyle}>
      <Icon name={'logo'} modifiers={'logo'} xs={LogoStyle} />
      <ToolbarItem {...toolbar} xs={ToolbarItemStyle} data-selected={true}>
        <Icon name={'email'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={ToolbarItemStyle}>
        <Icon name={'calendar'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={ToolbarItemStyle}>
        <Icon name={'contacts'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={ToolbarItemStyle}>
        <Icon name={'folder'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={ToolbarItemStyle}>
        <Icon name={'settings'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={LogoutStyle}>
        <Icon name={'logout'} />
      </ToolbarItem>
    </SystemToolbar>
  );
};
