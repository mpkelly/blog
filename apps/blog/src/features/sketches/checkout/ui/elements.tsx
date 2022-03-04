import { Centered, Column, Row, styled, Text } from '@mpkelly/ui';

export const PrimaryText = Text;

export const MutedText = styled(Text, { color: '$text-2' });

export const LargeText = styled(Text, { fontSize: '$lg' });

export const Separator = styled(Row, {
  height: 1,
  width: '100%',
  borderTop: '1px solid $neutral-3',
  my: '$md',
  variants: {
    vertical: {
      true: {
        my: 0,
        mx: '$lg',
        width: 1,
        height: '80%',
        borderTop: 'unset',
        borderLeft: '1px solid $neutral-3',
      },
    },
  },
});

export const Panel = styled(Column, {
  height: '100%',
  borderRadius: '$md',
  bg: '$neutral-2',
  p: '$lg',
  flex: 1,
  gap: '$lg',
});

export const Label = styled(Text, {
  color: '$success-1',
  bg: '$success-2',
  px: '$md',
  py: '$sm',
  borderRadius: '$sm',
  fontWeight: '$bold',
  lineHeight: '$none',
  display: 'inline-flex',
  alignItems: 'center',
});

export const Bottom = styled(Column, {
  mt: 'auto',
});

export const Button = styled(Centered, PrimaryText, {
  width: '100%',
  p: '$md $lg',
  borderRadius: '$md',
  bg: '$primary-5',
  color: '$neutral-2',
  fontWeight: '$bold',
});
