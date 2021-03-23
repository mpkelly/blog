import React, {createContext, ReactNode, useContext} from 'react';
import {Tokens} from "./Tokens";

export const TokenContext = createContext<Tokens|undefined>(undefined);
export const useTokens = () => useContext(TokenContext) as Tokens;

type Props = {
  tokens?:Tokens;
  children:ReactNode;
}

export const TokenProvider = (props:Props) => {
  const {tokens = {}, children} = props;
  return <TokenContext.Provider value={tokens}>{children}</TokenContext.Provider>
}