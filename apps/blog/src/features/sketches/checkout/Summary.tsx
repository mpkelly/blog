import React from 'react';
import { Column, H3, styled, Row } from '@mpkelly/ui';
import { Bottom, Button, Panel, PrimaryText, Separator } from './ui/elements';

const Root = styled(Column, Panel, {
  maxWidth: 280,
  [`${H3}`]: {
    lineHeight: 1,
  },
});

const Item = styled(PrimaryText);

const Value = styled(PrimaryText, { flexShrink: 0 });

const Entry = styled(Row, {
  justifyContent: 'space-between',
  color: '$text-2',
  variants: {
    type: {
      discount: {
        color: '$success-1',
      },
      subtotal: {
        '> *': {
          fontWeight: '$bold',
        },
      },
      total: {
        '> *': {
          fontWeight: '$bold',
        },
        [`${Value}`]: {
          fontSize: '$xl',
          color: '$primary-5',
        },
      },
    },
  },
});

export const Summary = () => {
  return (
    <Root>
      <H3>Order Summary</H3>
      <Entry>
        <Item>12 x Monthly insurance fee</Item>
        <Value>+ $120</Value>
      </Entry>
      <Entry>
        <Item>1 x Consultation fee</Item>
        <Value>$0</Value>
      </Entry>
      <Entry type={'discount'}>
        <Item>1 x Annual payment discount</Item>
        <Value>- $120</Value>
      </Entry>

      <Entry type={'subtotal'}>
        <Item>Subtotal</Item>
        <Value>+ $1320</Value>
      </Entry>
      <Separator />
      <Entry>
        <Item>1 x annual mobile phone cover</Item>
        <Value>+ $199</Value>
      </Entry>
      <Entry type={'subtotal'}>
        <Item>Subtotal</Item>
        <Value>+ $199</Value>
      </Entry>

      <Separator />

      <Entry type={'total'}>
        <Item>Total Due:</Item>
        <Value>$1519</Value>
      </Entry>

      <Bottom>
        <Button>Confirm payment</Button>
      </Bottom>
    </Root>
  );
};
