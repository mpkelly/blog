import * as React from 'react';
import { ReactNode } from 'react';
import { Toolbar } from '../toolbar/Toolbar';

type Props = {
  children: ReactNode;
};

export const Page = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
};
