import React, { ReactNode } from 'react';
import { Elements } from './Elements';
import { createContext } from 'elements/util/Context';

export const [Context, useElements] = createContext<Elements>();

type Props = {
  elements?: Elements;
  children: ReactNode;
};

export const ElementProvider = (props: Props) => {
  const { elements = {}, children } = props;
  return <Context.Provider value={elements}>{children}</Context.Provider>;
};
