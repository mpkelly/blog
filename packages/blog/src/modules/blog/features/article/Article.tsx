import * as React from 'react';
import { Row } from 'elements/flex/Row';

export const Article = () => {
  return <Row xs={Style} />;
};

const Style = {
  fontFamily: 'primary',
  display: 'block',
  p: {
    lineHeight: 'primary',
  },
};
