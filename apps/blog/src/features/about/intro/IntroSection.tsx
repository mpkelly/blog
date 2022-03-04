import { Column, styled } from '@mpkelly/ui';
import { PageTitle } from '../../../components/PageTitle';

const Root = styled('section', Column);

export const IntroSection = () => {
  return (
    <Root>
      <PageTitle title={'About '} />
    </Root>
  );
};
