import { Column, Row, Text, styled } from '@mpkelly/ui';
import React from 'react';

const Root = styled(Column, {
  size: '100%',
  overflow: 'hidden',
  bg: '#eee',
  gap: '$lg',
});

const Toolbar = styled(Row, {
  width: '100%',
  overflow: 'hidden',
  gap: '$lg',
  bg: 'white',
  height: 20,
});

const Content = styled(Row, {
  flex: 1,
  size: '100%',
  overflow: 'hidden',
  gap: '$lg',
  px: '$lg',
  pb: '$lg',
});

const Items = styled(Column, {
  flex: 2,
  overflow: 'hidden',
  bg: 'white',
});

const Details = styled(Column, {
  flex: 1,
  overflow: 'hidden',
  bg: 'white',
});

export const Payment = () => {
  return (
    <Root>
      <Toolbar />
      <Content>
        <Items />
        <Details />
      </Content>
    </Root>
  );
};
