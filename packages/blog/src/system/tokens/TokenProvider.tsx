import React, { ReactNode } from 'react';
import { Tokens } from './Tokens';
import { createContext } from 'elements/util/Context';

export const [Context, useTokens] = createContext<Tokens>();

type Props = {
  tokens?: Tokens;
  children: ReactNode;
};

export const TokenProvider = (props: Props) => {
  const { tokens = {}, children } = props;
  return <Context.Provider value={tokens}>{children}</Context.Provider>;
};
