import React from 'react';
import {
  Row,
  Column,
  Text,
  styled,
  H3,
  Centered,
  Switch,
  Thumb,
} from '@mpkelly/ui';
import { Input, Panel } from './ui/elements';
import { PayPalLogo } from './PayPalLogo';
import { VisaLogo } from './VisaLogo';
import { MasterCardLogo } from './MasterCardLogo';

const Root = styled(Panel, {});

const Title = styled(H3);

const CardNumberLabel = styled(Text, {
  fontWeight: '$bold',
  fontSize: '$sm',
});

const CardNumber = styled(Row, {
  gap: '$lg',
});

const LogoList = styled(Row, { gap: '$md', mt: '$sm' });

const CardNumberInput = styled(Input, {
  bg: '$neutral-3',
  '&:focus': {
    outline: 'none',
    border: '2px solid $primary-5',
  },
});

const Field = styled(Column, {
  gap: '$md',
});

const Indicator = styled(Centered, {
  borderRadius: '50%',
  size: 16,
  border: '3px solid $neutral-3',
  flexShrink: 0,
});

const ChoiceContent = styled(Row, {
  borderTop: '1px solid $neutral-3',
  p: '$lg',
  display: 'none',
  gap: '$lg',
});

const ChoiceButton = styled(Row, {
  alignItems: 'center',
  gap: '$lg',
  pl: '$md',
});

const ContentRow = styled(Row, {
  maxWidth: 500,
  gap: '$lg',
  '> div': {
    flex: 1,
    input: {
      width: '100%',
    },
  },
});

const Choice = styled(Column, {
  p: '$md',
  borderRadius: '$md',
  border: '1px solid $neutral-3',
  filter: 'saturate(20%)',
  gap: '$md',
  variants: {
    selected: {
      true: {
        filter: 'initial',
        borderColor: '$primary-5',
        [`${Indicator}`]: {
          border: '5px solid $primary-5',
        },
        [`${ChoiceContent}`]: {
          display: 'flex',
        },
      },
    },
  },
});

const CardDetails = styled(Column, { flex: 1, gap: '$lg' });

const AddressDetails = styled(Column, { flex: 1, gap: '$lg' });

const Separator = styled(Column, {
  height: '100%',
  width: 1,
  flexShrink: 0,
  borderRight: '1px solid $neutral-3',
});

export const Payment = () => {
  return (
    <Root border>
      <Title>Payment details</Title>

      <Choice>
        <ChoiceButton>
          <Indicator />
          <PayPalLogo />
        </ChoiceButton>
        <ChoiceContent />
      </Choice>

      <Choice selected>
        <ChoiceButton>
          <Indicator />
          <LogoList>
            <VisaLogo />
            <MasterCardLogo />
          </LogoList>
        </ChoiceButton>
        <ChoiceContent>
          <CardDetails>
            <ContentRow>
              <Field>
                <CardNumberLabel>Cardholder name*</CardNumberLabel>
                <CardNumberInput placeholder={'Exactly as appears on card'} />
              </Field>
            </ContentRow>
            <ContentRow>
              <Field>
                <CardNumberLabel>Card number*</CardNumberLabel>
                <CardNumber>
                  <CardNumberInput />
                  <CardNumberInput />
                  <CardNumberInput />
                  <CardNumberInput />
                </CardNumber>
              </Field>
            </ContentRow>
            <ContentRow>
              <Field>
                <CardNumberLabel>Expiry Date*</CardNumberLabel>
                <CardNumberInput placeholder={'Expiry date'} />
              </Field>
              <Field>
                <CardNumberLabel>CVV*</CardNumberLabel>
                <CardNumberInput placeholder={'Last 3 digits back of card'} />
              </Field>
            </ContentRow>
          </CardDetails>
          <Separator />
          <AddressDetails>
            <Field>
              <CardNumberLabel>First line of address*</CardNumberLabel>
              <CardNumberInput
                placeholder={'First line of cardholder address'}
              />
            </Field>
            <ContentRow>
              <Field>
                <CardNumberLabel>Postcode*</CardNumberLabel>
                <CardNumberInput placeholder={'Cardholder postcode'} />
              </Field>
              <Field>
                <CardNumberLabel>Country*</CardNumberLabel>
                <CardNumberInput placeholder={'Cardholder country'} />
              </Field>
            </ContentRow>
            <ContentRow>
              <Field>
                <CardNumberLabel>Save card details</CardNumberLabel>
                <Switch checked context={'primary'}>
                  <Thumb />
                </Switch>
              </Field>
            </ContentRow>
          </AddressDetails>
        </ChoiceContent>
      </Choice>
    </Root>
  );
};
