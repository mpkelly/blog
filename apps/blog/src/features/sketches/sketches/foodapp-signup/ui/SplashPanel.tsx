import React from 'react';
import { Row, Column, Text, styled } from '@mpkelly/ui';
import { CNNLogo } from './CNNLogo';
import { BloombergLogo } from './BloombergLogo';

type Props = {};

const Root = styled(Column, {
  background: `url("assets/food.jpg")`,
  backgroundSize: 'cover',
});

const Content = styled(Column, {
  size: '100%',
  bg: '$back-2',
  p: '$xl',
  gap: '$md',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
});

const Coupon = styled(Text, {
  fontWeight: '$bold',
  fontSize: '$lg',
  color: '$text-3',
});

const CouponValue = styled(Text, {
  fontSize: '$lg',
  color: '$accent-1',
  fontWeight: '$bold',
  borderRadius: '$md',
  lineHeight: '$none',
});

const Discount = styled(Text, {
  fontSize: 100,
  color: '$accent-1',
  fontWeight: '$bold',
  border: '3px solid $accent-1',
  borderRadius: '$md',
  lineHeight: '$none',
  p: '0 $sm',
});

const Message = styled(Text, { fontSize: '$lg', fontWeight: '$bold' });

const Company = styled(Text, {
  fontSize: '$xs',
  color: '$text-3',
  position: 'absolute',
  bottom: '$lg',
});

export const SplashPanel = () => {
  return (
    <Root>
      <Content>
        <Coupon>
          Use coupon <CouponValue>FIRSTORDER30</CouponValue>
        </Coupon>
        <Discount>30% OFF</Discount>
        <Message>
          Join thousands of others in having delicious food delivered direct to
          your door.
        </Message>
        <Company>Eat Street Inc, San Francisco, California</Company>
      </Content>
    </Root>
  );
};
