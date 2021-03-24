import * as React from 'react';
import { SystemProvider } from 'system/SystemProvider';
import { SystemIcons } from './system/Icons';
import { Router } from './features/router/Router';
import { SystemElements } from './system/Elements';
import { SystemTokens } from './system/Tokens';
import { RootLanguageBundle } from 'system/ExampleLanguage';

export const Blog = () => {
  return (
    <SystemProvider
      icons={SystemIcons}
      elements={SystemElements}
      tokens={SystemTokens}
      bundles={RootLanguageBundle}
      lang={'lorem'}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Router />
    </SystemProvider>
  );
};
