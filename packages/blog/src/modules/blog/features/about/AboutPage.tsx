import * as React from 'react';
import { Main } from 'elements/flex/Main';
import { Row } from 'elements/flex/Row';
import { Aside } from 'elements/flex/Aside';
import { Button } from 'elements/button/Button';
import { Icon } from 'elements/icon/Icon';
import { Text } from 'elements/text/Text';
import { Article } from 'elements/flex/Article';
import { PageTitle } from '../page/PageTitle';
import { Employment } from './Employment';
import { Skills } from './Skills';
import { Summary } from './Summary';

export const AboutPage = () => {
  return (
    <Main xs={Style}>
      <Row xs={HeaderRowStyle}>
        <PageTitle title={'About.'} />
        <Button modifiers={'clear'} onClick={window.print}>
          <Icon name={'print'} modifiers={'muted xl'} />
        </Button>
      </Row>
      <Article data-print-root xs={PrintWrapperStyle}>
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
      </Article>
    </Main>
  );
};

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
