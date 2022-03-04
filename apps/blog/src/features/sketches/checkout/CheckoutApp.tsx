import React from 'react';
import { Column, Row, styled } from '@mpkelly/ui';
import { checkoutApp } from './ui/theme/theme';
import { SketchAppPreview } from '../SketchAppPreview';
import { Header } from './Header';
import { Products } from './Products';
import { Summary } from './Summary';
import { Payment } from './Payment';

const Root = styled(Column, {
  size: '100%',
  overflow: 'hidden',
  p: '$lg',
  alignItems: 'center',
});

const AppRoot = styled(Column, {
  size: '100%',
  overflow: 'hidden',
  gap: '$xl',
  bg: '$neutral-1',
  p: '$xl',
});

const Details = styled(Column, {
  gap: '$xl',
  flex: 2,
});

const Content = styled('main', Row, {
  flex: 1,
  gap: '$xl',
});

export const CheckoutApp = () => {
  return (
    <Root className={checkoutApp}>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <SketchAppPreview>
        <AppRoot>
          <Header />
          <Content>
            <Details>
              <Products />
              <Payment />
            </Details>

            <Summary />
          </Content>
        </AppRoot>
      </SketchAppPreview>
    </Root>
  );
};
