import React from 'react';
import { Column, Row, styled } from '@mpkelly/ui';
import { foodApp } from './ui/theme/theme';
import { SignupForm } from './SignupForm';
import { SplashPanel } from './SplashPanel';

const Root = styled(Column, {
  height: '100vh',
  width: '100vw',
  alignItems: 'center',
  overflow: 'hidden',
  //global
  fontFamily: '$main',
  fontWeight: '$normal',
  fontSize: '$regular',
  lineHeight: '$none',
  color: '$text-1',
});

const Content = styled(Row, {
  width: 1000,
  height: 650,
  '> div': {
    width: '50%',
  },
  borderRadius: '$md',
  bg: '$back-1',
});

export const FoodApp = () => {
  return (
    <Root className={foodApp}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <Content>
        <SignupForm />
        <SplashPanel />
      </Content>
    </Root>
  );
};
