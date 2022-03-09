import React from 'react';
import { Row, styled } from '@mpkelly/ui';
import { foodApp } from './theme/theme';
import { SignupForm } from './SignupForm';
import { SplashPanel } from './SplashPanel';

type Props = {};

const Root = styled(Row, {
  width: 1000,
  height: 650,
  overflow: 'hidden',
  borderRadius: '$md',
  bg: '$back-1',
  '> div': {
    width: '50%',
  },
  //global
  fontFamily: '$main',
  fontWeight: '$normal',
  fontSize: '$regular',
  lineHeight: '$none',
  color: '$text-1',
});

export const FoodApp = (props: Props) => {
  return (
    <Root className={foodApp}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <SignupForm />
      <SplashPanel />
    </Root>
  );
};
