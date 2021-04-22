import * as React from 'react';
import { Column } from 'elements/flex/Column';
import { Row } from 'elements/flex/Row';
import { styled } from 'goober';
import { ReactElementProps } from 'elements/Element';

export const Loading = () => {
  return (
    <Column xs={Style}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Column>
  );
};

const Style = {
  width: 'emaillist.width',
  height: '100%',
  padding: 'md',
};

const SkeletonStyle = {
  width: '100%',
  flexShrink: 0,
  marginBottom: 'md',
};

const AvatarStyle = {
  height: 32,
  width: 32,
  borderRadius: '50%',
  marginRight: 'md',
  flexShrink: 0,
  backgroundColor: 'background.2',
};

const ContentStyle = {
  flex: 1,
  '> *': {
    borderRadius: 'sm',
  },
};

const TopBarStyle = {
  height: 16,
  width: '100%',
  backgroundColor: 'background.2',
  marginBottom: 'md',
};

const BottomBarStyle = {
  width: '100%',
  height: 'emaillistpreview.height',
  backgroundColor: 'background.2',
  marginBottom: 'md',
};

const Skeleton = () => {
  const delay = Math.random() * 500;
  return (
    <SkeletonContainer xs={SkeletonStyle} delay={delay}>
      <Row xs={AvatarStyle} />
      <Column xs={ContentStyle}>
        <Row xs={TopBarStyle} />
        <Row xs={TopBarStyle} />
        <Row xs={BottomBarStyle} />
      </Column>
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled(Row)<{ delay: number } & ReactElementProps>`
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: blink 1s infinite;
  animation-delay: ${(props) => props.delay}ms;
`;
