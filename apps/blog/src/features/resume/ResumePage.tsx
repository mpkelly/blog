import {
  Column,
  Row,
  PrintIcon,
  styled,
  H2,
  Paragraph,
  Button,
} from '@mpkelly/ui';
import { PageTitle } from '../../components/PageTitle';
import { EmploymentHistory } from './EmploymentHistory';
import { SkillsSummary } from './SkillsSummary';
import { PrintHeader } from './PrintHeader';

const Root = styled('section', Column, {
  width: '$content',
  p: '$xl',
  gap: '$2xl',
  [`${Text}`]: {
    fontSize: '$sm',
  },
  [`${Paragraph}`]: {
    fontSize: '$sm',
  },
});

const Header = styled(Row, {
  alignItems: 'center',
  justifyContent: 'space-between',
  [`${PrintIcon}`]: {
    size: 72,
  },
});

const Content = styled('article', Column, { gap: '$xl' });
const Body = styled('article', Row, { gap: '$2xl' });

const PrintButton = styled(Button, {
  bg: 'transparent',
  '&:hover': {
    color: '$accent-1',
  },
});

export const ResumePage = () => {
  return (
    <Root>
      <Header>
        <PageTitle title={'Resume '} />
        <PrintButton onClick={window.print}>
          <PrintIcon />
        </PrintButton>
      </Header>
      <Content data-print-root>
        <PrintHeader />
        <Body>
          <EmploymentHistory />
          <SkillsSummary />
        </Body>
      </Content>
    </Root>
  );
};
