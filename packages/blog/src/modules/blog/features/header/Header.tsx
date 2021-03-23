import * as React from 'react';
import { Header as HTMLHeader } from 'elements/flex/Header';
import { Navigation } from '../navigation/Navigation';
import { Text } from 'elements/text/Text';
import { ElementProps } from 'system/Element';

const Style = {
  alignItems: 'center',
  width: '100%',
  maxWidth: 'content.width',
  margin: 'auto',
};

const NameStyle = { marginRight: 'auto' };

export const Header = (props: ElementProps<HTMLDivElement>) => {
  return (
    <HTMLHeader xs={Style} {...props}>
      <Text xs={NameStyle}>Mike Kelly</Text>
      <Navigation />
    </HTMLHeader>
  );
};
