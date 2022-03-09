import React from 'react';
import { GitHubIcon, MailIcon, Row, styled, Text } from '@mpkelly/ui';

const Root = styled(Row, {
  alignItems: 'center',
  justifyContent: 'space-between',
  //only used for printing
  display: 'none',
  pb: '$lg',
  borderBottom: '2px solid black !important',
});

const Name = styled(Text, { fontSize: '$2xl', fontWeight: '$bold' });

const Contact = styled(Row, { alignItems: 'center', gap: '$lg' });
const ContactItem = styled(Row, { alignItems: 'center', gap: '$md' });
const ContactText = styled(Text);

export const PrintHeader = () => {
  return (
    <Root data-print-header>
      <Name>Mike Kelly</Name>
      <Contact>
        <ContactItem>
          <MailIcon />
          <ContactText>kikemelly@gmail.com</ContactText>
        </ContactItem>
        <ContactItem>
          <GitHubIcon />
          <ContactText>mpkelly</ContactText>
        </ContactItem>
      </Contact>
    </Root>
  );
};
