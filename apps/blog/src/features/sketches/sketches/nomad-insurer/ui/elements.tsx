import { Centered, Column, Row, styled, Text } from '@mpkelly/ui';

export const PrimaryText = Text;

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
  borderRadius: '$sm',
  bg: '$neutral-5',
  p: '$lg',
  flex: 1,
  gap: '$lg',
  variants: {
    border: {
      true: {
        border: '1px solid $neutral-4',
      },
    },
  },
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

export const Right = styled(Row, {
  ml: 'auto',
});

export const Button = styled(Centered, PrimaryText, {
  width: '100%',
  p: '$md $lg',
  borderRadius: '$md',
  bg: '$primary-5',
  color: '$neutral-2',
  fontWeight: '$bold',
});

export const Input = styled('input', Text, {
  height: 38,
  borderRadius: '$md',
  border: '1px solid $neutral-3',
  p: '$md',
});
