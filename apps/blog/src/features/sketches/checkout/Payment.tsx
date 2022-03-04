import React from 'react';
import { Row, Column, Text, styled, H3 } from '@mpkelly/ui';
import { Panel } from './ui/elements';

type Props = {};

const Root = styled(Panel, {});

const Title = styled(H3);

export const Payment = (props: Props) => {
  return (
    <Root>
      <Title>Payment details</Title>
    </Root>
  );
};
