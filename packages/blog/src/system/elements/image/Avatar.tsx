import * as React from 'react';
import { createElement, ElementProps } from 'elements/Element';
import { Thumbnail } from 'system/elements/image/Thumbnail';
import { Text } from 'system/elements/text/Text';
import { FlexRow, Row } from 'system/elements/flex/Row';
import { ReactNode } from 'react';

type Props = {
  url?: string;
  text?: string;
  status?: Status;
} & ElementProps<any>;

export enum Status {
  Online,
  Away,
  Busy,
  Offline,
}

export const Avatar = (props: Props) => {
  const { url, text, status = -1, ...rest } = props;
  let content: ReactNode;
  if (url) {
    content = <Thumbnail src={url} alt={text} />;
  } else {
    content = <Text>{getText(text || '')}</Text>;
  }
  return (
    <Container {...rest}>
      {content}
      {status > -1 && status !== Status.Offline && <Row data-status={status} />}
    </Container>
  );
};

const getText = (text: string) => {
  const parts = text.split(' ');
  if (parts.length > 1) {
    if (parts[parts.length - 1].toLowerCase().charAt(0).match(/[a-z]/i)) {
      return String(
        parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
      ).toUpperCase();
    }
  }
  return String(text.charAt(0) + text.charAt(1)).toUpperCase();
};

const Container = createElement<HTMLDivElement>('div', 'avatar', {
  defaultStyle: FlexRow,
});
