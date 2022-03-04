import React, { ReactNode } from 'react';
import { Row, Column, Text, styled } from '@mpkelly/ui';
import { InfoIcon } from './Icons';
import { PrimaryText } from './elements';

type Props = {
  children: ReactNode;
  warning?: boolean;
};

const Root = styled(Row, {
  borderRadius: '$md',
  p: '$md',
  gap: '$lg',
  color: '$info-1',
  bg: '$info-2',
  alignItems: 'center',
  [`${InfoIcon}`]: {
    flexShrink: 0,
  },
  variants: {
    warning: {
      true: {
        bg: '$danger-2',
        color: '$danger-1',
      },
    },
  },
});

const InfoText = styled(PrimaryText, {});

export const InfoBox = (props: Props) => {
  const { children, warning } = props;
  return (
    <Root warning={warning}>
      <InfoIcon />
      <InfoText>{children}</InfoText>
    </Root>
  );
};
