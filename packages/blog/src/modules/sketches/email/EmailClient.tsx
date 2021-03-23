import 'system/Bootstrap';
import React from 'react';
import { SystemProvider } from 'system/SystemProvider';
import { SystemTokens } from './system/Tokens';
import { SystemElements } from './system/Elements';
import { Row } from 'elements/flex/Row';
import { Toolbar } from './features/toolbar/Toolbar';
import { SystemIcons } from './system/Icons';
import { Navigation } from './features/navigation/Navigation';
import { Emails } from './features/email-list/Emails';
import { ExampleEmails } from './features/email/Email';
import { Detail } from './features/email/Detail';
import { Frame } from '../../blog/features/frame/Frame';
import { SystemLanguages } from './system/SystemLanguages';

const Style = {
  backgroundColor: 'background.1',
  overflow: 'hidden',
  width: '100%',
  height: 820,
  borderRadius: 'md',
};

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
          <Toolbar />
          <Navigation />
          <Emails emails={ExampleEmails} />
          <Detail email={ExampleEmails[0]} />
        </Row>
      </Frame>
    </SystemProvider>
  );
};
