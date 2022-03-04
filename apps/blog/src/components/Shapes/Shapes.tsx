import { styled } from '@mpkelly/ui';

export const SemiCircle = styled('div', {
  flexShrink: 0,
  variants: {
    direction: {
      right: {
        borderTopRightRadius: '$round',
        borderBottomRightRadius: '$round',
      },
      left: {
        borderTopLeftRadius: '$round',
        borderBottomLeftRadius: '$round',
      },
    },
  },
  defaultVariants: {
    direction: 'right',
  },
});

export const Circle = styled('div', {
  flexShrink: 0,
  borderRadius: '$round',
});
