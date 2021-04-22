import * as React from 'react';
import { Column } from 'elements/flex/Column';
import { Header } from '../header/Header';
import { Element } from 'elements/Element';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Page = (props: Props) => {
  const { children } = props;
  return (
    <Column xs={Style}>
      <Header />
      <Column xs={ContentStyle}>{children}</Column>
    </Column>
  );
};

const Style = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'background.1',
};

const ContentStyle: Element = {
  flex: 1,
  width: '100%',
  overflowY: 'auto',
  alignItems: 'center',
};
