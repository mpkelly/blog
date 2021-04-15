import * as React from 'react';
import { Icon } from 'elements/icon/Icon';
import { Text } from 'elements/text/Text';
import { Centered } from 'elements/flex/Centered';
import { Row } from 'elements/flex/Row';
import { Column } from 'elements/flex/Column';
import { Button } from 'elements/button/Button';

type Props = {
  onRetry(): void;
};

const Style = {
  flex: 1,
  width: '100%',
  height: '100%',
};

const ContentStyle = {
  alignItems: 'center',
};

const IconStyle = {
  marginRight: 'md',
};

const ButtonStyle = {
  marginLeft: 'xxl',
};

export const ErrorView = (props: Props) => {
  const { onRetry } = props;
  return (
    <Centered xs={Style}>
      <Column>
        <Row xs={ContentStyle}>
          <Icon name={'error'} xs={IconStyle} modifiers={'xxl muted'} />
          <Text modifiers={'xxl muted'}>Unable to fetch emails</Text>
        </Row>
        <Button xs={ButtonStyle} modifiers={'clear text'} onClick={onRetry}>
          Try again?
        </Button>
      </Column>
    </Centered>
  );
};
