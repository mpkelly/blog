import React from 'react';
import { Row, Column, Text, styled, Centered } from '@mpkelly/ui';
import { AttachIcon } from './ui/Icons';
import { getPicProps, ProfilePic } from './ui/elements';

type Props = {
  subject: string;
  preview: string;
  sender: string;
  time: string;
  attachments?: boolean;
  profileUrl?: string;
  selected?: boolean;
};

const Root = styled(Row, {
  gap: '$lg',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '$md',
  p: '$md',
  flexShrink: 0,
  position: 'relative',
  variants: {
    selected: {
      true: {
        bg: '$neutral-2',
      },
    },
  },
});

const Subject = styled(Text, {
  fontWeight: '$bold',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});
const Preview = styled(Text, {
  color: '$text-2',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});
const Sender = styled(Text, { color: '$text-1' });
const Details = styled(Column, {
  gap: '$sm',
  width: '100%',
  overflow: 'hidden',
});
const Time = styled(Text, { color: '$text-2', fontSize: '$sm' });
const Header = styled(Row, {
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Attachments = styled(AttachIcon, {
  position: 'absolute',
  bottom: 10,
  left: 16,
  size: 14,
  color: '$accent-1',
});

export const InboxItem = (props: Props) => {
  const { subject, preview, sender, time, attachments, profileUrl, selected } =
    props;
  return (
    <Root selected={selected}>
      <ProfilePic {...getPicProps(sender, profileUrl)} />
      <Details>
        <Header>
          <Sender>{sender}</Sender>
          <Time>{time}</Time>
        </Header>
        <Subject>{subject}</Subject>
        <Preview>{preview}</Preview>
      </Details>
      {attachments && <Attachments />}
    </Root>
  );
};
