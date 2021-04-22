import * as React from 'react';
import { Column } from 'system/elements/flex/Column';
import { Row } from 'elements/flex/Row';
import { Icon } from 'system/elements/icon/Icon';
import { Text } from 'system/elements/text/Text';
import { H3, H5 } from 'system/elements/text/Headings';
import { Paragraph } from 'system/elements/text/Paragraph';
import { ElementProps } from 'elements/Element';
import { Link } from 'elements/link/Link';

export const Employment = (props: ElementProps<any>) => {
  const { xs, ...rest } = props;
  return (
    <Column xs={{ ...Style, ...xs }} {...rest}>
      <H3>Employment History</H3>
      <H5>
        React Developer Lead - <Link href={'#'}>DocMX</Link>{' '}
      </H5>
      <Row xs={DetailsStyle}>
        <Icon name={'date'} modifiers={'muted'} />
        <Text data-value>2017 - Present</Text>
        <Icon name={'company'} modifiers={'muted'} />
        <Text data-value> iT4 Group</Text>
        <Icon name={'location'} modifiers={'muted'} />
        <Text data-value>Remote</Text>
      </Row>
      <Paragraph modifiers={'muted'}>
        As well as the flagship DocMX webapp, I have built the DocMX mobile
        webapp, DocMX native app and a backend monitoring service. I am now the
        frontend lead who manages a remote team that includes two other
        developers. DocMX is implemented in TypeScript using a mixture of legacy
        and modern React APIs. It uses Mobx mainly for global state management
        and is tested using Jest and Cypress.
      </Paragraph>
      <H5>
        Senior Java Developer - <Link href={'#'}>Babel</Link>{' '}
      </H5>
      <Row xs={DetailsStyle}>
        <Icon name={'date'} modifiers={'muted'} />
        <Text>2010 - 2016</Text>
        <Icon name={'company'} modifiers={'muted'} />
        <Text> Bravura Solutions</Text>
        <Icon name={'location'} modifiers={'muted'} />
        <Text>London</Text>
      </Row>
      <Paragraph modifiers={'muted'}>
        Babel is a modular system which shipped as customised builds to some of
        the world’s largest financial companies. I was responsible for some of
        the initial implementation (a rewrite - see below) as well as extending
        and customising the system further to support new and existing clients.
        I was also responsible for mentoring junior developers on our team.
      </Paragraph>
      <H5>Java Developer - Scenario Based Risk </H5>
      <Row xs={DetailsStyle}>
        <Icon name={'date'} modifiers={'muted'} />
        <Text>2009 - 2010</Text>
        <Icon name={'company'} modifiers={'muted'} />
        <Text> UBS Investment Bank</Text>
        <Icon name={'location'} modifiers={'muted'} />
        <Text>London</Text>
      </Row>
      <Paragraph modifiers={'muted'}>
        I was responsible for day-to-day development of SBR, a newly created
        internal risk reporting system written in Java and Google Web Toolkit.
      </Paragraph>
      <H5>
        Java Developer - <Link href={'#'}>Babel</Link>{' '}
      </H5>
      <Row xs={DetailsStyle}>
        <Icon name={'date'} modifiers={'muted'} />
        <Text>2008 - 2009</Text>
        <Icon name={'company'} modifiers={'muted'} />
        <Text> Bravura Solutions</Text>
        <Icon name={'location'} modifiers={'muted'} />
        <Text>Luxembourg</Text>
      </Row>
      <Paragraph modifiers={'muted'}>
        Bravura Solutions acquired Babel from a Luxembourg-based startup. This
        legacy system was eventually rewritten (see above). I was responsible
        mainly for small enhancements and bug fixing.
      </Paragraph>
      <H5>Java Developer - Messaging Hub</H5>
      <Row xs={DetailsStyle}>
        <Icon name={'date'} modifiers={'muted'} />
        <Text>2007 - 2008</Text>
        <Icon name={'company'} modifiers={'muted'} />
        <Text> Clearstream</Text>
        <Icon name={'location'} modifiers={'muted'} />
        <Text>Luxembourg</Text>
      </Row>
      <Paragraph modifiers={'muted'}>
        I worked on the Hub team which was responsible for internal message
        routing for various financial platforms owned by Clearstream. I was
        responsible for writing message transformations, e.g. SWIFT to XML.
      </Paragraph>
    </Column>
  );
};

const Style = {
  'h5:first-of-type': {
    marginTop: 'lg',
  },
  'h5:not(:first-of-type)': {
    marginTop: 'xl',
  },
};

const DetailsStyle = {
  marginBottom: 'md',
  alignItems: 'center',
  '*': {
    marginRight: 'md',
  },
  '[data-value]': {
    marginRight: 'lg',
  },
};
