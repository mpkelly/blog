import * as React from 'react';
import { ReactElementProps } from 'elements/Element';
import { Icon } from 'elements/icon/Icon';
import {
  Toolbar as SystenToolbar,
  ToolbarItem,
} from 'elements/toolbar/Toolbar';
import { useToolbarState } from 'reakit';
import { Separator } from 'elements/separator/Separator';

export const Toolbar = (props: ReactElementProps) => {
  const toolbar = useToolbarState({ loop: true });
  return (
    <SystenToolbar {...toolbar} xs={Style} {...props}>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'bold'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'italic'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'strikethrough'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'code'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'quote'} />
      </ToolbarItem>
      <Separator />
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'link'} />
      </ToolbarItem>
      <Separator />
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'align_left'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'align_right'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'align_center'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'align_justify'} />
      </ToolbarItem>
      <Separator />
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'bulleted_list'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'numbered_list'} />
      </ToolbarItem>
      <Separator />
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'image'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'video'} />
      </ToolbarItem>
      <ToolbarItem {...toolbar} xs={IconStyle}>
        <Icon name={'attachment'} />
      </ToolbarItem>
    </SystenToolbar>
  );
};

const Style = {
  alignItems: 'center',
  padding: 'xs',
  borderTop: '1px solid',
  borderColor: 'border.1',
  width: '100%',
};

const IconStyle = {
  marginLeft: 'xs',
  marginRight: 'xs',
};
