import * as React from 'react';
import { Toolbar, useToolbarState } from 'elements/toolbar/Toolbar';
import { EmailListItem } from './EmaiItem';
import { Email } from '../email/Email';
import { Element } from 'elements/Element';
import { SearchBox } from './SearchBox';
import { Column } from 'elements/flex/Column';
import { Text } from 'elements/text/Text';
import { Show } from 'elements/util/Show';
import { useEmailState } from '../email/EmailState';

const Style: Element = {
  backgroundColor: 'background.2',
  borderRight: '1px solid',
  borderColor: 'border.1',
  flexDirection: 'column',
};

const ListStyle: Element = {
  flexDirection: 'column',
  width: 'emaillist.width',
  overflowY: 'auto',
  padding: 'md',
};

const LabelStyle = {
  marginTop: 'lg',
  marginBottom: 'lg',
  marginLeft: 'md',
};

export const Emails = () => {
  const { emails, handleSelect } = useEmailState();
  const toolbar = useToolbarState({ loop: true });
  return (
    <Column xs={Style}>
      <SearchBox />
      <Toolbar {...toolbar} xs={ListStyle}>
        <Text modifiers={'label'} xs={LabelStyle}>
          Today
        </Text>
        {emails.read().map((email: Email, index: number) => (
          <>
            <EmailListItem
              {...toolbar}
              selected={toolbar.currentId === email.id}
              onClick={() => handleSelect(index)}
              email={email}
              key={email.id}
            />
            <Show when={index === 3}>
              <Text modifiers={'label'} xs={LabelStyle}>
                Last week
              </Text>
            </Show>
          </>
        ))}
      </Toolbar>
    </Column>
  );
};
