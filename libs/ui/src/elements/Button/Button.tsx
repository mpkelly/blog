import { styled } from '@mpkelly/ui';

export const Button = styled('button', {
  bg: '$primary-1',
  fontSize: '$regular',
  fontFamily: '$headings',
  border: 'none',
  outline: 'none',
  p: '$md $lg',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(80%)',
  },
  '&:active': {
    filter: 'brightness(50%)',
  },
});
