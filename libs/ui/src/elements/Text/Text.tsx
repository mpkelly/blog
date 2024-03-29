import { styled } from '@mpkelly/ui';

export const Text = styled('span', {
  fontFamily: '$main',
  fontWeight: '$normal',
  fontSize: '$regular',
  color: 'inherit',
  lineHeight: '$regular',
});

export const Paragraph = styled(Text, {
  lineHeight: '$paragraph',
  m: 0,
  defaultProps: {
    as: 'p',
  },
  variants: {
    size: {
      regular: {
        fontSize: '$regular',
      },
      "2xl": {
        fontSize: '$xl',
      }
    }
  }
});

const heading = {
  fontFamily: '$headings',
  fontWeight: '$bold',
  marginTop: 0,
  marginBottom: 0,
};

export const H1 = styled('h1', heading, {
  fontSize: '$2xl',
});

export const H2 = styled('h2', heading, {
  fontFamily: '$headings',
  fontSize: '$xl',
});
export const H3 = styled('h3', heading, {
  fontFamily: '$headings',
  fontSize: '$regular',
});

export const Link = styled('a', {
  fontFamily: '$headings',
  fontWeight: '$normal',
  fontSize: '$regular',
  color: 'inherit',
  lineHeight: '$none',
  textDecoration: 'none',
  borderBottom: '2px solid transparent',
  pb: '$md',
  '&.active, &:hover': {
    borderColor: '$accent-1',
  },
  variants: {
    inline: {
      true: {
        fontFamily: '$main',
        color: '$text-1',
        borderColor: '$accent-1',
        fontSize: 'inherit',
      },
    },
  },
});
