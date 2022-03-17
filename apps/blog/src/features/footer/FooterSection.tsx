import {
  Column,
  Row,
  Text,
  H1,
  darkTheme,
  styled,
  GitHubIcon,
  DribbbleIcon,
  MailIcon,
} from '@mpkelly/ui';
import { NavLink } from '../navigation/Navigation';

const Root = styled('section', Column, {
  bg: '$bg-1',
  width: '100%',
  minHeight: 300,
  p: '$xl',
  alignItems: 'center',
  color: '$text-1',
});

const Title = styled(H1);

const Content = styled(Row, {
  width: '$content',
  justifyContent: 'space-between',
  pb: '$lg',
  gap: '$xl',
});

const ContactLinks = styled(Column, { gap: '$lg' });

const Contact = styled('a', Row, {
  gap: '$md',
  alignItems: 'center',
  textDecoration: 'none',
  color: '$text-2',
});
const ContactName = styled(Text);

const Articles = styled(Column, { gap: '$lg' });

const Article = styled(NavLink, Text, { color: '$text-2' });

export const FooterSection = () => {
  return (
    <Root className={darkTheme}>
      <Content id={'footer'}>
        <ContactLinks>
          <Title>Contact info</Title>
          <Contact target={'_blank'} href={'https://github.com/mpkelly'}>
            <GitHubIcon size={'lg'} />
            <ContactName>Github</ContactName>
          </Contact>
          <Contact target={'_blank'} href={'https://dribbble.com/mpkelly'}>
            <DribbbleIcon size={'lg'} />
            <ContactName>Dribble</ContactName>
          </Contact>
          <Contact target={'_blank'} href={'mailto:kikemelly@gmail.com'}>
            <MailIcon size={'lg'} />
            <ContactName>Email</ContactName>
          </Contact>
        </ContactLinks>
        <Articles>
          <Title>Latest articles</Title>
          <Article to={'/articles/colour'}>
            How to organise colour in websites and apps
          </Article>
        </Articles>
      </Content>
    </Root>
  );
};
