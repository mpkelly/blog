import React from 'react';
import { styled } from '@mpkelly/ui';
import { IconProps } from 'phosphor-react';

export const createIcon = (
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
) => {
  return styled(icon, {
    color: 'inherit',
    variants: {
      size: {
        lg: {
          size: 36,
        },
        xl: {
          size: 48,
        },
        '2xl': {
          size: 100,
        },
        '3xl': {
          size: 200,
        },
        '4xl': {
          size: 400,
        },
      },
    },
    defaultProps: {
      size: 24,
      weight: 'regular',
    },
  });
};
