import React from 'react';
import { Row, Column, Text, styled } from '@mpkelly/ui';

type Props = {};

const Root = styled(Column, {
  background: `radial-gradient(
      circle closest-side,
    white 0,
    white 40.26%,
    transparent 40.26%,
    transparent 66%,
    white 0), conic-gradient(
    #76b7b2 0,
    #76b7b2 43.5%,
    #59a14f 0,
    #59a14f 69.6%,
    #edc949 0,
    #edc949 100%)`,
  position: 'relative',
  width: 300,
  minHeight: 200,
  margin: 0,
});

export const PieChart = (props: Props) => {
  return <Root></Root>;
};
