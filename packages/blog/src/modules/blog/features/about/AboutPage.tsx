import * as React from 'react';
import { Main } from 'elements/flex/Main';
import { Row } from 'system/elements/flex/Row';
import { Aside } from 'system/elements/flex/Aside';
import { PageTitle } from '../page/PageTitle';
import { Employment } from './Employment';
import { Skills } from './Skills';
import { Summary } from './Summary';
import { Button } from 'system/elements/button/Button';
import { Icon } from '../../../../system/elements/icon/Icon';
import { Text } from '../../../../system/elements/text/Text';
import { Column } from '../../../../system/elements/flex/Column';

const Style = {
  width: 'content.width',
  maxWidth: 'content.width',
  paddingTop: 'xxl',
  '[data-print-header]': {
    width: '100%',
    display: 'none',
    lineHeight: 1,
    margin: 0,
  },
};

const HeaderRowStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
};

const PrintWrapperStyle = {
  width: '100%',
};

const ContentStyle = {
  marginTop: 'xxl',
};

const EmployeeStyle = {
  flex: 2,
  alignItems: 'flex-start',
  marginRight: 'xxl',
};

const AsideStyle = {
  flex: 1,
};

const SummaryStyle = {
  alignItems: 'flex-start',
  marginBottom: 'xl',
};

const SkillsStyle = {
  alignItems: 'flex-start',
};

const PrintHeaderStyle = {
  justifyContent: 'space-between',
};

const ContactStyle = {
  alignItems: 'center',
  '*': {
    marginRight: 'md',
    lineHeight: 1,
  },
};

export const AboutPage = () => {
  return (
    <Main xs={Style}>
      <Row xs={HeaderRowStyle}>
        <PageTitle title={'About.'} />
        <Button modifiers={'clear'} onClick={window.print}>
          <Icon name={'print'} modifiers={'muted xl'} />
        </Button>
      </Row>
      <Column data-print-root xs={PrintWrapperStyle}>
        <Row data-print-header xs={PrintHeaderStyle}>
          <Text data-print-title modifiers={'gigantic bold'}>
            Mike Kelly
          </Text>
          <Row xs={ContactStyle}>
            <Icon name={'email'} />
            <Text> kikemelly@gmail.com</Text>
            <Icon name={'github'} />
            <Text> mpkelly</Text>
          </Row>
        </Row>
        <Row xs={ContentStyle}>
          <Employment xs={EmployeeStyle} />
          <Aside xs={AsideStyle}>
            <Summary xs={SummaryStyle} />
            <Skills xs={SkillsStyle} />
          </Aside>
        </Row>
      </Column>
    </Main>
  );
};
