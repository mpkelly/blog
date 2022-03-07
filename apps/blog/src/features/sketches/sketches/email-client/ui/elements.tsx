import { Centered, styled, Text } from '@mpkelly/ui';
import React from 'react';

export const Label = styled(Text, {
  color: '$text-2',
  fontSize: '$xs',
  textTransform: 'uppercase',
});

export const ProfilePic = styled(Centered, {
  size: 36,
  borderRadius: '50%',
  bg: '$neutral-1',
  flexShrink: 0,
  backgroundPosition: 'center',
  span: {
    textTransform: 'uppercase',
    fontWeight: '$bold',
  },
  variants: {
    large: {
      true: {
        size: 48,
      },
    },
  },
});

export const getPicProps = (sender: string, profileUrl?: string) => {
  if (profileUrl) {
    return { css: { backgroundImage: `url("${profileUrl}")` } };
  } else {
    const parts = sender.split(' ');
    let initials = sender.substring(0, 2);
    if (parts.length > 1) {
      initials = parts[0].charAt(0) + parts[parts.length - 1].charAt(0);
    }
    return {
      children: <Text>{initials}</Text>,
      css: { background: '$neutral-3' },
    };
  }
};
