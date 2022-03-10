import { Column, darkTheme, styled } from '@mpkelly/ui';

const Root = styled('section', Column, {
  bg: '$bg-1',
  height: 500,
  minHeight: 500,
  width: '100%',
  p: '$xl',
});

export const OutroSection = () => {
  return <Root className={darkTheme}>Test</Root>;
};
