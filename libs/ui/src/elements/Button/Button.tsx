import { styled } from '@mpkelly/ui';

export const Button = styled('button', {
  bg: '$primary-5',
  fontSize: '$regular',
  fontFamily: '$headings',
  border: 'none',
  outline: 'none',
  p: '$md $lg',
  cursor: 'pointer',
  '&:hover': {
    bg: '$primary-3',
  },
  '&:active': {
    bg: '$primary-7',
  },
});
