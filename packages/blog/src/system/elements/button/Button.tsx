import { Button as ReakitButton, ButtonProps } from 'reakit';
import { createJsxElement } from '../Element';

const InlineFlex = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export const Button = createJsxElement<HTMLButtonElement, Partial<ButtonProps>>(
  ReakitButton,
  'button',
  { defaultStyle: InlineFlex }
);
