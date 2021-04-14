import * as React from 'react';
import { Column } from 'elements/flex/Column';
import { Text } from 'elements/text/Text';

const Style = {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Loading = () => {
  return (
    <Column xs={Style}>
      <Text modifiers={'xxl muted'}>Loading...</Text>
    </Column>
  );
};
