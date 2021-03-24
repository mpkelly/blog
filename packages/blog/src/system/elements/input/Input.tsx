import { Input as ReakitInput, InputProps } from 'reakit';
import { createJsxElement } from '../Element';

export const Input = createJsxElement<HTMLInputElement, InputProps>(
  ReakitInput,
  'input'
);

export { useInput } from 'reakit';
