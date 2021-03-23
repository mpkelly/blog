import React, { createContext, ReactNode, useContext } from 'react';
import { IconBundle } from './icons/IconBundle';
import { Elements } from './elements/Elements';
import { Tokens } from './tokens/Tokens';
import { TokenProvider } from './tokens/TokenProvider';
import { IconProvider } from './icons/IconProvider';
import { ElementProvider } from './elements/ElementProvider';
import { I18NProvider, I18NProviderProps } from '@mpkelly/react-i18n';

export const SystemContext = createContext<Value | undefined>(undefined);
export const useSystem = () => useContext(SystemContext) as Value;

type Value = {
  elements?: Elements;
  tokens?: Tokens;
  icons?: IconBundle;
} & I18NProviderProps;

type Props = {
  children: ReactNode;
} & Value;

export const SystemProvider = (props: Props) => {
  const {
    elements = {},
    tokens = {},
    icons = { icons: {} },
    children,
    ...rest
  } = props;
  return (
    <I18NProvider {...rest}>
      <ElementProvider elements={elements}>
        <TokenProvider tokens={tokens}>
          <IconProvider icons={icons}>{children}</IconProvider>
        </TokenProvider>
      </ElementProvider>
    </I18NProvider>
  );
};
