import React from 'react';

export const createContext = <T>(
  initialValue: T | undefined = undefined
): [React.Context<T | undefined>, () => T] => {
  const Context = React.createContext<T | undefined>(initialValue);
  const useContext = () => React.useContext(Context) as T;
  return [Context, useContext];
};
