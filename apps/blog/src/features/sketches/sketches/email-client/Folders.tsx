import React from 'react';
import { Centered, Column, Row, styled, Text } from '@mpkelly/ui';
import { Controls } from '../../frames/Controls';
import { Label } from './ui/elements';
import {
  CalendarIcon,
  ChatIcon,
  DraftsIcon,
  GamesIcon,
  InboxIcon,
  SendIcon,
  SignOutIcon,
  StarIcon,
  TasksIcon,
  TrashIcon,
} from './ui/Icons';
import { Logo } from './ui/Logo';

type Props = {};

const Root = styled(Column, {
  p: '$lg',
  gap: '$xl',
  bg: '$neutral-2',
  width: 240,
});

const Header = styled(Row, {
  gap: '$lg',
  alignItems: 'center',
});

const AppName = styled(Text, {
  fontSize: '$lg',
});

const Group = styled(Column, {
  gap: '$md',
  [`${Label}`]: {
    ml: '$sm',
  },
});

const Badge = styled(Text, Centered, {
  fontSize: '$sm',
  size: 24,
  bg: '$neutral-1',
  borderRadius: '$round',
});

const GroupItem = styled(Row, {
  gap: '$lg',
  alignItems: 'center',
  p: '$md',
  color: '$text-2',
  [`${Badge}`]: {
    ml: 'auto',
  },
  variants: {
    selected: {
      true: {
        borderRadius: '$md',
        bg: '$neutral-1',
        color: '$accent-1',
      },
    },
    bottom: {
      true: {
        mt: 'auto',
      },
    },
  },
});

const Separator = styled(Row, {
  borderTop: '1px solid $neutral-3',
  height: 1,
  width: '100%',
});

export const Folders = (props: Props) => {
  return (
    <Root>
      <Controls />

      <Header>
        <Logo />
        <AppName>Email</AppName>
      </Header>

      <Group>
        <Label>Folders</Label>
        <GroupItem selected>
          <InboxIcon />
          <Text>Inbox</Text>
          <Badge>12</Badge>
        </GroupItem>
        <GroupItem>
          <DraftsIcon />
          <Text>Drafts</Text>
        </GroupItem>
        <GroupItem>
          <StarIcon />
          <Text>Starred</Text>
          <Badge>16</Badge>
        </GroupItem>
        <GroupItem>
          <SendIcon />
          <Text>Sent</Text>
        </GroupItem>
        <GroupItem>
          <TrashIcon />
          <Text>Trash</Text>
        </GroupItem>
      </Group>

      <Separator />

      <Group>
        <Label>More Apps</Label>
        <GroupItem>
          <CalendarIcon />
          <Text>Calendar</Text>
        </GroupItem>
        <GroupItem>
          <ChatIcon />
          <Text>Chat</Text>
        </GroupItem>
        <GroupItem>
          <TasksIcon />
          <Text>Tasks</Text>
        </GroupItem>
        <GroupItem>
          <GamesIcon />
          <Text>Games</Text>
        </GroupItem>
      </Group>

      <GroupItem bottom>
        <SignOutIcon />
        <Text>Sign out</Text>
      </GroupItem>
    </Root>
  );
};
