import * as React from 'react';
import { Text } from 'elements/text/Text';
import { Main } from 'elements/flex/Main';

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
};

export const AboutPage = () => {
  return (
    <Main xs={Style}>
      <Text modifiers={'gigantic bold'}>About.</Text>
    </Main>
  );
};
