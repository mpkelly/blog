import React, { ReactNode } from 'react';
import { Row, Column, Text, styled, Centered } from '@mpkelly/ui';

type Props = {
  children: ReactNode;
};

const Root = styled(Centered, {
  borderRadius: '$md',
  width: '80%',
  height: '100%',
});

const Content = styled(Column, {
  bg: 'white',
  borderRadius: '$md',
  size: '100%',
  maxWidth: 1200,
});

export const SketchAppPreview = (props: Props) => {
  const { children } = props;
  return (
    <Root>
      <Content>{children}</Content>
    </Root>
  );
};
