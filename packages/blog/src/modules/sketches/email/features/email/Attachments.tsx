import React from 'react';
import { ToolbarItem } from 'elements/toolbar/Toolbar';
import { Email } from './Email';
import { Text } from 'elements/text/Text';
import { Icon } from 'elements/icon/Icon';
import { ToolbarItemProps, useToolbarState } from 'reakit';
import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  usePopoverState,
} from 'elements/popover/Popover';
import { AttachmentItem } from './AttachmentItem';

type Props = {
  email: Email;
} & ToolbarItemProps;

export const Attachments = (props: Props) => {
  const { email, ...rest } = props;
  const popover = usePopoverState();
  const toolbar = useToolbarState({ loop: true });
  return (
    <>
      <PopoverDisclosure {...popover}>
        <ToolbarItem xs={AttachmentsStyle} {...rest}>
          <Icon
            name={'attachment'}
            modifiers={'small accent'}
            xs={AttachmentsIconStyle}
          />
          <Text modifiers={'small accent'}>
            {email.attachments.length} attachments
          </Text>
        </ToolbarItem>
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Show attachments">
        <PopoverArrow {...popover} />
        {email.attachments.map((attachment) => (
          <AttachmentItem
            attachment={attachment}
            key={attachment.name}
            {...toolbar}
          />
        ))}
      </Popover>
    </>
  );
};

const AttachmentsStyle = {
  alignItems: 'center',
};

const AttachmentsIconStyle = {
  marginRight: 'sm',
  marginTop: 1,
};
