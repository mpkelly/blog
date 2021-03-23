import React from 'react';
import { Toolbar, useToolbarState } from 'elements/toolbar/Toolbar';
import { EmailListItem } from './EmaiItem';
import { Email } from '../email/Email';
import { Element } from 'system/Element';
import { SearchBox } from './SearchBox';
import { Column } from 'elements/flex/Column';
import { Text } from 'elements/text/Text';
import { Show } from 'elements/util/Show';

type Props = {
  emails: Email[];
};

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

export const Emails = (props: Props) => {
  const { emails } = props;
  const toolbar = useToolbarState({ loop: true });
  return (
    <Column xs={Style}>
      <SearchBox />
      <Toolbar {...toolbar} xs={ListStyle}>
        <Text modifiers={'label'} xs={LabelStyle}>
          Today
        </Text>
        {emails.map((email: Email, index) => (
          <>
            <EmailListItem
              {...toolbar}
              selected={toolbar.currentId === email.id}
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
