import React, {createContext, ReactNode, useContext} from 'react';
import {Elements} from "./Elements";

export const ElementContext = createContext<Elements|undefined>(undefined);
export const useElements = () => useContext(ElementContext) as Elements;

type Props = {
  elements?:Elements;
  children:ReactNode;
}

export const ElementProvider = (props:Props) => {
  const {elements = {}, children} = props;
  return <ElementContext.Provider value={elements}>{children}</ElementContext.Provider>
}