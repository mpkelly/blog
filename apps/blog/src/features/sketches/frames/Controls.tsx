import { Centered, Row, styled } from '@mpkelly/ui';

const Root = styled(Row, { gap: '$md' });

const Close = styled(Centered, {
  size: 14,
  borderRadius: '50%',
  bg: '#FC5859',
});

const Minimize = styled(Close, {
  bg: '#FEBF30',
});

const Maximize = styled(Close, {
  bg: '#36CD41',
});

export const Controls = () => {
  return (
    <Root>
      <Close />
      <Minimize />
      <Maximize />
    </Root>
  );
};
