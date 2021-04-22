import 'system/Bootstrap';
import React from 'react';
import { SystemProvider } from 'system/SystemProvider';
import { SystemTokens } from './system/Tokens';
import { SystemElements } from './system/Elements';
import { Row } from 'elements/flex/Row';
import { SystemIcons } from './system/Icons';
import { Frame } from '../../blog/features/frame/Frame';
import { SystemLanguages } from './system/SystemLanguages';
import { Router } from './features/router/Router';

export const EmailClient = () => {
  return (
    <SystemProvider
      tokens={SystemTokens}
      elements={SystemElements}
      icons={SystemIcons}
      bundles={SystemLanguages}
      lang={'en'}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta&display=swap"
        rel="stylesheet"
      />
      <Frame backgroundColor={'background.5'}>
        <Row xs={Style}>
          <Router />
        </Row>
      </Frame>
    </SystemProvider>
  );
};

const Style = {
  backgroundColor: 'background.1',
  overflow: 'hidden',
  width: '100%',
  height: 820,
  borderRadius: 'md',
};
