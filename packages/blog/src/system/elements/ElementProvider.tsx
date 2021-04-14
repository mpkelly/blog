import React, { ReactNode } from 'react';
import { createContext } from 'react-merge-context';
import { Elements } from './Elements';

export const [Provider, useElements] = createContext<Elements | undefined>();

type Props = {
  elements?: Elements;
  children: ReactNode;
};

export const ElementProvider = (props: Props) => {
  const { elements = {}, children } = props;
  return <Provider value={elements}>{children}</Provider>;
};
