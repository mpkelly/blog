import React, { ReactNode } from 'react';
import { Column, styled } from '@mpkelly/ui';
import { BrowserWindow } from './frames/BrowserWindow';

type Props = {
  children: ReactNode;
};

const Root = styled(Column, {
  borderRadius: '$md',
  height: 760,
  width: 1300,
  overflow: 'hidden',
  alignItems: 'center',
});

export const SketchAppPreview = (props: Props) => {
  const { children } = props;
  return (
    <Root>
      <BrowserWindow url={'www.nomadinsurer.com'}>{children}</BrowserWindow>
    </Root>
  );
};
