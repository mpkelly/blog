import React from 'react';
import { Element } from 'elements/Element';
import { Header as SystemHeader } from 'elements/flex/Header';
import { Email } from './Email';
import { H1 } from 'elements/text/Headings';
import { Icon } from 'elements/icon/Icon';
import { Separator } from 'elements/separator/Separator';
import {
  Toolbar,
  ToolbarItem,
  useToolbarState,
} from 'elements/toolbar/Toolbar';
import { Row } from 'elements/flex/Row';
import { Text } from 'elements/text/Text';
import { Attachments } from './Attachments';
import { Avatar } from 'elements/image/Avatar';

type Props = {
  email: Email;
};

const Style: Element = {
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 'lg',
  paddingTop: 0,
  backgroundColor: 'background.2',
  borderRadius: 'sm',
  width: '100%',
};

const SenderRowStyle = {
  paddingTop: 'lg',
  alignItems: 'center',
};

const TitleRowStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'text.2',
  width: '100%',
};

const FromStyle: Element = {
  marginLeft: 'md',
  marginRight: 'auto',
};

const EmailAddressStyle = {
  marginLeft: 'sm',
};

const DateStyle = { marginLeft: 'md' };

const ToolbarStyle = {
  alignItems: 'center',
};

const IconStyle = {
  marginLeft: 'sm',
};

export const Header = (props: Props) => {
  const { email } = props;
  const toolbar = useToolbarState({ loop: true });
  return (
    <SystemHeader xs={Style}>
      <Row xs={TitleRowStyle}>
        <H1>{email.subject}</H1>
        <Toolbar {...toolbar} xs={ToolbarStyle}>
          <ToolbarItem xs={IconStyle} {...toolbar}>
            <Icon name={'delete'} />
          </ToolbarItem>
          <Separator />
          <ToolbarItem xs={IconStyle} {...toolbar}>
            <Icon name={'star'} />
          </ToolbarItem>
          <Separator />
          <ToolbarItem xs={IconStyle} {...toolbar}>
            <Icon name={'reply'} />
          </ToolbarItem>
          <ToolbarItem xs={IconStyle} {...toolbar}>
            <Icon name={'reply_all'} />
          </ToolbarItem>
        </Toolbar>
      </Row>
      <Row xs={SenderRowStyle}>
        <Avatar url={email.from.profilePic} status={email.from.status} />
        <Row xs={FromStyle}>
          <Text modifiers={'bold'}>{email.from.name} </Text>
          <Text modifiers={'muted'} xs={EmailAddressStyle}>
            [ {email.from.email} ]
          </Text>
        </Row>
        <Attachments email={email} {...toolbar} />
        <Text modifiers={'small muted'} xs={DateStyle}>
          {email.date}
        </Text>
      </Row>
    </SystemHeader>
  );
};
