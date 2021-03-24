import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from '../navigation/Link';
import { Text } from 'elements/text/Text';
import { Element } from 'elements/Element';
import { Icon } from 'elements/icon/Icon';

type Props = {
  children: ReactNode;
};

const LinkStyle: Element = {
  position: 'absolute',
  top: 8,
  left: 8,
  display: 'inline-flex',
  color: 'text.1',
  alignItems: 'center',
};

export const SketchPage = (props: Props) => {
  const { children } = props;
  return (
    <>
      {children}
      <Link to={'/sketches'} xs={LinkStyle}>
        <Icon name={'left_arrow'} />
        <Text>Back to sketches</Text>
      </Link>
    </>
  );
};
