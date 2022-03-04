import React from 'react';
import { styled } from '@mpkelly/ui';
import { Macbook } from './Macbook';
import { Payment } from './payment/Payment';

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

const Root = styled('div', {
  width: 761 * multiplier,
  height: 478 * multiplier,
  left: 124 * multiplier,
  top: 33 * multiplier,
  flexShrink: 0,
  position: 'absolute',
  bg: '$primary-5',
});

export const Mockup = () => {
  return (
    <Container>
      <Macbook />
      <Root>
        <Payment />
      </Root>
    </Container>
  );
};
