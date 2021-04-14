import React, { ReactNode } from 'react';
import { createContext } from 'react-merge-context';
import { Tokens } from './Tokens';

export const [Provider, useTokens] = createContext<Tokens>();

type Props = {
  tokens?: Tokens;
  children: ReactNode;
};

export const TokenProvider = (props: Props) => {
  const { tokens = {}, children } = props;
  return <Provider value={tokens}>{children}</Provider>;
};
