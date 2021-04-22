import React from 'react';
import { Element } from 'elements/Element';
import { Separator } from 'elements/separator/Separator';
import { MailFolders } from './Folders';
import { Labels } from './Labels';
import { Column } from 'elements/flex/Column';

export const Navigation = () => {
  return (
    <Column xs={Style} as={'nav'}>
      <MailFolders />
      <Separator modifiers={'horizontal'} />
      <Labels />
    </Column>
  );
};

const Style: Element = {
  flexDirection: 'column',
  width: 'nav.width',
  padding: 'md',
  borderRight: '1px solid',
  borderRightColor: 'border.1',
};
