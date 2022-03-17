import React from 'react';
import { darkTheme, Row, styled, Text } from '@mpkelly/ui';
import { Macbook } from './Macbook';

const multiplier = 500 / 1008;

const Container = styled('div', {
  width: 500,
  height: 309.2,
  flexShrink: 0,
  position: 'relative',
  svg: {
    position: 'absolute',
  },
});

const Root = styled(Row, {
  width: 761 * multiplier,
  height: 478 * multiplier,
  left: 124 * multiplier,
  top: 33 * multiplier,
  flexShrink: 0,
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$text-2',
  bg: '$bg-1',
});

export const Mockup = () => {
  return (
    <Container>
      <Macbook />
      <Root className={darkTheme}>
        <Text>WIP</Text>
      </Root>
    </Container>
  );
};
