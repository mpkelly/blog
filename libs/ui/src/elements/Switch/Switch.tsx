import { styled } from '@mpkelly/ui';
import * as RSwitch from '@radix-ui/react-switch';

export const Switch = styled(RSwitch.Root, {
  borderRadius: '$round',
  p: 2,
  height: 20,
  width: 36,
  flexShrink: 0,
  border: 'none',
  bg: '$neutral-1',
  boxShadow: `inset 0 2px 4px $neutral-2`,
  '&[data-state="unchecked"]': {
    bg: '$neutral-3',
  },
  variants: {
    context: {
      primary: {
        '&[data-state="checked"]': {
          bg: '$primary-5',
        },
      },
    },
  },
});

export const Thumb = styled(RSwitch.Thumb, {
  display: 'block',
  borderRadius: '$round',
  size: 16,
  bg: '$neutral-2',
  '&[data-state="checked"]': {
    transform: 'translateX(16px)',
  },
});
