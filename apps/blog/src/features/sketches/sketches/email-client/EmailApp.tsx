import React from 'react';
import { Row, Column, Text, styled } from '@mpkelly/ui';
import { BrowserWindow } from '../../frames/BrowserWindow';
import { Folders } from './Folders';
import { emailAppTheme } from './ui/theme/theme';
import { Inbox } from './Inbox';
import { EmailDetail } from './EmailDetail';

const Root = styled(Row, {
  flex: 1,
  minHeight: 1000,
  overflow: 'hidden',
  //global styles
  fontFamily: '$main',
  fontWeight: '$normal',
  fontSize: '$regular',
  lineHeight: '$none',
  color: '$text-1',
});

const Frame = styled(Row, {
  bg: '$neutral-1',
  flex: 1,
  height: 760,
  width: 1300,
  borderRadius: '$md',
  overflow: 'hidden',
});

export const EmailApp = (props: { className?: string }) => {
  const classes = `${emailAppTheme} ${props.className || ''}`;
  return (
    <Root className={classes}>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora&family=Source+Sans+Pro:wght@200;300;400;600&display=swap"
        rel="stylesheet"
      />
      <Frame data-frame>
        <Folders />
        <Inbox />
        <EmailDetail />
      </Frame>
    </Root>
  );
};
