import React, { ReactNode } from 'react';
import { IconBundle } from './icons/IconBundle';
import { Elements } from 'elements/Elements';
import { Tokens } from './tokens/Tokens';
import { TokenProvider } from './tokens/TokenProvider';
import { IconProvider } from './icons/IconProvider';
import { ElementProvider } from 'elements/ElementProvider';
import { I18NProvider, I18NProviderProps } from '@mpkelly/react-i18n';
import { Breakpoints } from 'system/responsive/Breakpoints';
import { DefaultBreakpoints } from 'system/responsive/DefaultBreakpoints';
import { createContext } from 'elements/util/Context';

export const [Context, useSystem] = createContext<Value>();

type Value = {
  elements?: Elements;
  tokens?: Tokens;
  icons?: IconBundle;
  breakpoints?: Breakpoints;
} & Omit<I18NProviderProps, 'children'>;

type Props = {
  children: ReactNode;
} & Value;

export const SystemProvider = (props: Props) => {
  const {
    elements = {},
    tokens = {},
    icons = { icons: {} },
    breakpoints = DefaultBreakpoints,
    children,
    bundles,
    lang,
    markdownRules,
  } = props;
  const value = {
    elements,
    tokens,
    icons,
    breakpoints,
    bundles,
    lang,
    markdownRules,
  };
  return (
    <Context.Provider value={value}>
      <I18NProvider bundles={bundles} lang={lang} markdownRules={markdownRules}>
        <ElementProvider elements={elements}>
          <TokenProvider tokens={tokens}>
            <IconProvider icons={icons}>{children}</IconProvider>
          </TokenProvider>
        </ElementProvider>
      </I18NProvider>
    </Context.Provider>
  );
};
