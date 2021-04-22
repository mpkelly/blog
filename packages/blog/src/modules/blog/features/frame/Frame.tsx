import React, { ReactNode } from 'react';
import { Centered } from 'elements/flex/Centered';
import { Column } from 'elements/flex/Column';
import { Row } from 'elements/flex/Row';

type Props = {
  children: ReactNode;
  backgroundColor: string;
};

export const Frame = (props: Props) => {
  const { backgroundColor, children } = props;
  return (
    <Centered xs={{ ...Style, backgroundColor }}>
      <Column xs={FrameStyle}>
        <Row xs={ToolbarStyle}>
          <Row xs={CloseStyle} />
          <Row xs={MinimizeStyle} />
          <Row xs={ExpandStyle} />
        </Row>
        {children}
      </Column>
    </Centered>
  );
};

const Style = {
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const FrameStyle = {
  borderRadius: 'md',
  backgroundColor: 'background.4',
  padding: 'md',
  boxShadow: '0px 20px 40px rgba(0,0,0,0.4)',
  transform: 'scale(1)',
  overflow: 'hidden',
  width: 1350,
  height: 820,
  maxWidth: '98vw',
  maxHeight: 'calc(100vh - 80px)',
};

const CircleStyle = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  marginRight: 'md',
};

const ToolbarStyle = {
  marginBottom: 'md',
};

const CloseStyle = {
  ...CircleStyle,
  backgroundColor: 'danger',
};

const MinimizeStyle = {
  ...CircleStyle,
  backgroundColor: 'warning',
};

const ExpandStyle = {
  ...CircleStyle,
  backgroundColor: 'success',
};
