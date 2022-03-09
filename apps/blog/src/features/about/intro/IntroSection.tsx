import { Column, Row, Paragraph, styled } from '@mpkelly/ui';
import { PageTitle } from '../../../components/PageTitle';

const Root = styled('section', Column, {
  gap: '$xl',
});

const Content = styled(Row, { gap: '$xl' });

const Details = styled(Column, { flex: 1, gap: '$lg' });

const Image = styled(Column, {
  flex: 1,
  maxWidth: '50%',
  img: {
    height: 400,
    objectFit: 'contain',
  },
});

export const IntroSection = () => {
  return (
    <Root>
      <PageTitle title={'About '} />
      <Content>
        <Details>
          <Paragraph>
            Hi, I'm <strong>Mike</strong>.
          </Paragraph>
          <Paragraph>
            I am a computer programmer with 15 years experience. I spent 10
            years working with enterprise Java but have been making frontends
            with JavaScript and TypeScript for the last 5 years and I{' '}
            <i>really</i> enjoy it.
          </Paragraph>
          <Paragraph>
            I am from the UK but I'm currently a digital nomad so I prefer to
            work remotely. You can count on me to work quickly and effectively.
            I have a freelancer mind state and aim to start adding value from
            day one.
          </Paragraph>
        </Details>
        <Image>
          <img src={'/assets/me.jpg'} />
        </Image>
      </Content>
    </Root>
  );
};
