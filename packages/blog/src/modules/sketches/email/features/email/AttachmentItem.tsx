import * as React from 'react';
import { Attachment } from './Email';
import { Row } from 'elements/flex/Row';
import { Element } from 'system/Element';
import { Text } from 'elements/text/Text';
import { ToolbarItemProps } from 'reakit';
import { Icon } from 'elements/icon/Icon';
import { ToolbarItem } from 'elements/toolbar/Toolbar';
import { Image } from 'elements/image/Image';

type Props = {
  attachment: Attachment;
} & ToolbarItemProps;

const Style: Element = {
  alignItems: 'center',
  width: 240,
  height: 50,
};

const ImageStyle = {
  width: 32,
};

const TextStyle = {
  marginRight: 'auto',
  marginLeft: 'sm',
};

export const AttachmentItem = (props: Props) => {
  const { attachment, ...rest } = props;
  return (
    <Row xs={Style}>
      <Image src={'./images/jpg.png'} xs={ImageStyle} />
      <Text xs={TextStyle}>{attachment.name}</Text>
      <ToolbarItem {...rest}>
        <Icon name={'preview'} modifiers={'small'} />
      </ToolbarItem>
      <ToolbarItem {...rest}>
        <Icon name={'download'} modifiers={'small'} />
      </ToolbarItem>
    </Row>
  );
};
