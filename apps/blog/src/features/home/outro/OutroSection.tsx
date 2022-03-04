import { Column, styled } from '@mpkelly/ui';

const Root = styled('section', Column, {
  bg: '$primary-5',
  height: 1000,
  minHeight: 1000,
  flexShrink: 0,
  p: '$xl',
});

export const OutroSection = () => {
  return <Root>Test</Root>;
};
