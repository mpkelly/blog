import React from 'react';
import { Row } from 'elements/flex/Row';
import { Input, useInput } from 'elements/input/Input';
import { Icon } from 'elements/icon/Icon';
import { Element } from 'system/Element';

const Style: Element = {
  position: 'relative',
  alignItems: 'center',
  padding: 'lg',
  paddingTop: 'md',
  width: '100%',
};

const IconStyle: Element = {
  position: 'absolute',
  left: 24,
  color: 'text.2',
};

const InputStyle = {
  paddingLeft: 36,
  flex: 1,
};

export const SearchBox = () => {
  const input = useInput();
  return (
    <Row xs={Style}>
      <Icon name={'search'} xs={IconStyle} />
      <Input {...input} placeholder={'Search email'} xs={InputStyle} />
    </Row>
  );
};
