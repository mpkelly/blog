import React from 'react';
import { Row, Column, Text, styled, Centered } from '@mpkelly/ui';
import { EmailIcon } from './Icons';

type Props = {};

const Root = styled(Centered, {
  borderRadius: '$md',
  size: 36,
  flexShrink: 0,
  bg: '$primary-5',
});

export const Logo = (props: Props) => {
  return (
    <Root>
      <EmailIcon />
    </Root>
  );
};
