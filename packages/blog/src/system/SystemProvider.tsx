import React, { ReactNode } from 'react';
import { createContext } from 'react-merge-context';
import { I18NProvider } from 'react-with-i18n';
import { IconBundle } from './icons/IconBundle';
import { Elements } from 'elements/Elements';
import { Tokens } from './tokens/Tokens';
import { TokenProvider } from './tokens/TokenProvider';
import { IconProvider } from './icons/IconProvider';
import { ElementProvider } from 'elements/ElementProvider';
import { Breakpoints } from 'system/responsive/Breakpoints';
import { DefaultBreakpoints } from 'system/responsive/DefaultBreakpoints';

export const [Provider, useSystem] = createContext<Value>();

type Value = {
  elements?: Elements;
  tokens?: Tokens;
  icons?: IconBundle;
  breakpoints?: Breakpoints;
  //TODO need types from I18N lib
} & any;

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
    <Provider value={value}>
      <I18NProvider bundles={bundles} lang={lang} markdownRules={markdownRules}>
        <ElementProvider elements={elements}>
          <TokenProvider tokens={tokens}>
            <IconProvider icons={icons}>{children}</IconProvider>
          </TokenProvider>
        </ElementProvider>
      </I18NProvider>
    </Provider>
  );
};
