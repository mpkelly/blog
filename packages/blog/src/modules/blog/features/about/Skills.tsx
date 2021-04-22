import * as React from 'react';
import { Row } from 'elements/flex/Row';
import { Label } from 'elements/label/Label';
import { H3 } from 'elements/text/Headings';
import { Column } from 'system/elements/flex/Column';
import { ElementProps } from 'elements/Element';

export const Skills = (props: ElementProps<any>) => {
  return (
    <Column {...props}>
      <H3>Skills</H3>
      <Row xs={Style}>
        <Label>TypeScript</Label>
        <Label>JavaScript</Label>
        <Label>React</Label>
        <Label>Valtio</Label>
        <Label>Webpack</Label>
        <Label>Rollup</Label>
        <Label>Lerna</Label>
        <Label>Jest</Label>
        <Label>Testing Library</Label>
        <Label>Cypress</Label>
        <Label>Test Cafe</Label>
      </Row>
    </Column>
  );
};

const Style = {
  flexWrap: 'wrap',
  marginTop: 'lg',
  '*': {
    marginRight: 'md',
    marginBottom: 'lg',
  },
};
