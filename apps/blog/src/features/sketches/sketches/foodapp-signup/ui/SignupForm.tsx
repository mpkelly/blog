import React from 'react';
import { Row, Column, Text, styled, Centered } from '@mpkelly/ui';
import { GoogleLogo } from './GoogleLogo';
import { Input } from '../../nomad-insurer/ui/elements';

type Props = {};

const Root = styled(Column, {
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$xl',
  gap: '$xl',
});

const Logo = styled(Text, {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$primary-1',
});
const Street = styled(Text, {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$text-1',
});

const GoogleButton = styled(Row, {
  p: '$sm $md',
  alignItems: 'center',
  borderRadius: '$md',
  gap: '$md',
  border: '1px solid $text-2',
  [`${Text}`]: {
    color: '$text-1',
  },
});

const Body = styled(Column, {
  alignItems: 'center',
  gap: '$lg',
  width: '70%',
});

const Description = styled(Text, {
  text: '$text-1',
});

const FormInput = styled(Input, {
  height: 40,
  outline: 'none',
  border: '1px solid transparent',
  boxShadow: 'inset 0 2px 2px 2px rgba(0,0,0,.1)',
  bg: '$back-3',
  '&:focus': {
    border: '1px solid $primary-1',
  },
});
const Form = styled(Column, { gap: '$xl', width: '100%' });
const FormLabel = styled(Text, { fontSize: '$sm', fontWeight: '$bold' });
const FormField = styled(Column, { gap: '$sm' });
const SignupButton = styled(Centered, {
  p: '$md',
  alignItems: 'center',
  borderRadius: '$md',
  gap: '$lg',
  bg: '$primary-1',
  [`${Text}`]: {
    fontWeight: '$bold',
    color: '$text-3',
  },
});

const Terms = styled(Text, {
  color: '$text-1',
  alignSelf: 'center',
  strong: {
    color: '$primary-1',
  },
});

export const SignupForm = (props: Props) => {
  return (
    <Root>
      <Logo>
        EAT <Street>STREET</Street>
      </Logo>
      <Body>
        <Description>
          Signup to start ordering delicious food in your area. It only takes a
          minute.
        </Description>
        <Form>
          <FormField>
            <FormLabel>Full name</FormLabel>
            <FormInput placeholder={'Full name'} />
          </FormField>
          <FormField>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder={'Email'} />
          </FormField>
          <FormField>
            <FormLabel>Password</FormLabel>
            <FormInput placeholder={'password'} type={'password'} />
          </FormField>
          <SignupButton>
            <Text>Signup</Text>
          </SignupButton>
        </Form>
        <Terms>
          See our <strong>terms & conditions</strong>
        </Terms>
      </Body>
      <GoogleButton>
        <GoogleLogo />
        <Text>Continue with Google</Text>
      </GoogleButton>
    </Root>
  );
};
