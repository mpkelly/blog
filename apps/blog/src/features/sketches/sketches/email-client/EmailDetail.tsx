import React from 'react';
import { Row, Column, Text, styled, H1, Paragraph } from '@mpkelly/ui';
import { Separator } from './Inbox';
import { getPicProps, ProfilePic } from './ui/elements';
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  DocumentIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  SendIcon,
  SettingsIcon,
  StrikethroughIcon,
} from './ui/Icons';

const Root = styled(Column, {
  flex: 1,
  p: '$xl',
  pb: '$lg',
  gap: '$lg',
});

const Header = styled(Row, {
  justifyContent: 'space-between',
  alignItems: 'center',
});

const HeaderSender = styled(Row, { gap: '$lg' });
const HeaderIdentifier = styled(Column, { gap: '$sm' });
const HeaderName = styled(Text, { fontWeight: 'bold' });
const HeaderEmail = styled(Text);
const HeaderTime = styled(Text, { color: '$text-2' });

const Subject = styled(H1, {
  fontWeight: 200,
});

const BodyText = styled(Paragraph, {
  color: '$text-2',
});

const ReplyBox = styled(Column, {
  bg: '$neutral-2',
  border: '1px solid $neutral-3',
  borderRadius: '$md',
  height: 300,
  width: '100%',
  overflow: 'hidden',
  mt: 'auto',
});

const ReplyToolbar = styled(Row, {
  gap: '$lg',
  p: '$md',
  borderBottom: '1px solid $neutral-3',
  alignItems: 'center',
  svg: {
    width: 16,
  },
});

const ReplyContent = styled(Column, {
  p: '$lg',
  gap: '$lg',
});

const BottomToolbar = styled(Row, {
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SendButton = styled(Row, {
  borderRadius: '$md',
  alignItems: 'center',
  gap: '$lg',
  p: '$md',
  bg: '$primary-5',
  svg: {
    width: 16,
  },
});

const ReplySettings = styled(SettingsIcon, { ml: 'auto' });

const ToolbarSeparator = styled(Column, {
  height: '70%',
  width: 1,
  borderRight: '1px solid $neutral-3',
});

export const EmailDetail = () => {
  return (
    <Root>
      <Header>
        <HeaderSender>
          <ProfilePic
            large
            {...getPicProps(
              '',
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJF35ahcXljNF2i6oMCV02bHH1tjt0SG_bhziv2tqOxTJqY1A51Co3Osa_Gg12IwvsqU&usqp=CAU'
            )}
            style={{ backgroundSize: 50 }}
          />
          <HeaderIdentifier>
            <HeaderName>Bertrand Russell</HeaderName>
            <HeaderEmail>brussell@philosophy.com</HeaderEmail>
          </HeaderIdentifier>
        </HeaderSender>
        <HeaderTime>12:40pm 12th April 1945</HeaderTime>
      </Header>
      <Separator />
      <Subject>The essence of liberalism</Subject>
      <BodyText>
        The essence of liberalism is an attempt to secure a social order not
        based on irrational dogma [a feature of tyranny], and insuring stability
        [which anarchy undermines] without involving more restraints than are
        necessary for the preservation of the community.
      </BodyText>
      <BodyText>
        But the liberal attitude does not say that you should oppose authority.
        It says only that you should be free to oppose authority, which is quite
        a different thing. The essence of the liberal outlook in the
        intellectual sphere is a belief that unbiased discussion is a useful
        thing and that men should be free to question anything if they can
        support their questioning by solid arguments. The opposite view, which
        is maintained by those who cannot be called liberals, is that the truth
        is already known, and that to question it is necessarily subversive.
      </BodyText>
      <BodyText>Regards, Bertie</BodyText>
      <ReplyBox>
        <ReplyToolbar>
          <BoldIcon />
          <ItalicIcon />
          <StrikethroughIcon />
          <ToolbarSeparator />
          <AlignLeftIcon />
          <AlignRightIcon />
          <AlignCenterIcon />
          <AlignJustifyIcon />
          <ToolbarSeparator />
          <LinkIcon />
          <ImageIcon />
          <DocumentIcon />
          <ReplySettings />
        </ReplyToolbar>
        <ReplyContent>
          <BodyText>Dear Bertie,</BodyText>
          <BodyText>Sorry the slow reply.</BodyText>

          <BodyText>
            This sounds great but do you have any practical advice for dealing
            with Vlad the Invader?
          </BodyText>
          <BodyText>Yours urgently,</BodyText>
          <BodyText>The World</BodyText>
        </ReplyContent>
      </ReplyBox>
      <BottomToolbar>
        <Text>Cancel</Text>
        <SendButton>
          <Text>Send</Text>
          <SendIcon />
        </SendButton>
      </BottomToolbar>
    </Root>
  );
};
