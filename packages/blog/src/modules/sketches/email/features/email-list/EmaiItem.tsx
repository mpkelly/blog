import React from 'react';
import { Element } from 'system/Element';
import { ToolbarItem, ToolbarItemProps } from 'elements/toolbar/Toolbar';
import { Email } from '../email/Email';
import { Column } from 'elements/flex/Column';
import { Text } from 'elements/text/Text';
import { Row } from 'elements/flex/Row';
import { Icon } from 'elements/icon/Icon';
import { Show } from 'elements/util/Show';
import { Avatar } from 'elements/image/Avatar';

type Props = {
  selected?: boolean;
  email: Email;
} & ToolbarItemProps;

const Style: Element = {
  alignSelf: 'flex-start',
  borderBottom: '1px solid',
  borderBottomColor: 'border.1',
  width: '100%',
  marginBottom: 'sm',
  '&[data-selected=true]': {
    color: 'text.2',
  },
};

const MainStyle = {
  marginLeft: 'lg',
  overflow: 'hidden',
};

const HeaderStyle = {
  width: '100%',
  justifyContent: 'space-between',
  marginBottom: 'sm',
};

const PreviewStyle = {
  height: 'emaillistpreview.height',
  maxHeight: 'emaillistpreview.height',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: 'text.2',
  lineHeight: 'sm',
};

const DateStyle = {
  marginLeft: 'auto',
};

export const EmailListItem = (props: Props) => {
  const { email, selected, ...rest } = props;
  const status = Math.round(Math.random() * 3);
  return (
    <ToolbarItem id={email.id} xs={Style} data-selected={selected} {...rest}>
      <Avatar
        url={email.fromProfilePic}
        text={email.from.name}
        status={status}
      />
      <Column xs={MainStyle}>
        <Row xs={HeaderStyle}>
          <Text modifiers={'muted'}>{email.from.name}</Text>
          <Text modifiers={'small muted'} xs={DateStyle}>
            {email.date}
          </Text>
        </Row>
        <Row xs={HeaderStyle}>
          <Text modifiers={'bold'}>{email.subject}</Text>
          <Show when={email.attachments.length}>
            <Icon name={'attachment'} modifiers={'small accent'} />
          </Show>
        </Row>

        <Text xs={PreviewStyle}>{email.body}</Text>
      </Column>
    </ToolbarItem>
  );
};
