import React from 'react';
import { Element } from 'elements/Element';
import { Separator } from 'elements/separator/Separator';
import { MailFolders } from './Folders';
import { Labels } from './Labels';
import { Column } from 'elements/flex/Column';

const NavigationStyle: Element = {
  flexDirection: 'column',
  width: 'nav.width',
  padding: 'md',
  borderRight: '1px solid',
  borderRightColor: 'border.1',
};

export const Navigation = () => {
  return (
    <Column xs={NavigationStyle} as={'nav'}>
      <MailFolders />
      <Separator modifiers={'horizontal'} />
      <Labels />
    </Column>
  );
};
