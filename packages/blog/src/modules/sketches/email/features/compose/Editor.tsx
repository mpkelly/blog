import * as React from 'react';
import { Column } from 'elements/flex/Column';
import { Textarea } from 'elements/text/Textarea';
import { useInput } from 'elements/input/Input';
import { ReactElementProps } from 'elements/Element';
import { Toolbar } from './Toolbar';
import { Footer } from 'elements/flex/Footer';
import { Button } from 'elements/button/Button';

export const Editor = (props: ReactElementProps) => {
  const { xs = {}, ...rest } = props;
  const input = useInput();
  return (
    <Column xs={{ ...Style, ...xs }} {...rest}>
      <Toolbar />
      <Textarea onChange={input.onChange} xs={TextareaStyle} spellCheck={false}>
        {Value}
      </Textarea>
      <Footer xs={FooterStyle}>
        <Button modifiers={'clear text'}>Save as draft</Button>
        <Button xs={SendButtonStyle}>Send</Button>
      </Footer>
    </Column>
  );
};

const Style = {
  padding: 'md',
  overflow: 'hidden',
};

const TextareaStyle = {
  backgroundColor: 'background.2',
  flexGrow: 1,
};

const FooterStyle = {
  paddingTop: 'sm',
  paddingBottom: 'sm',
  width: '100%',
};

const SendButtonStyle = {
  marginLeft: 'auto',
};

const Value = `
Hello,

Thanks for the pics and the amazing lorem ipsum - very thoughtful! Right back at ya:


Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad **minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Regards
`.trim();
