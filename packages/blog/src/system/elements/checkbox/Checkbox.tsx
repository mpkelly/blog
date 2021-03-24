import { Checkbox as ReakitCheckbox, CheckboxProps } from 'reakit';
import { createJsxElement } from '../Element';

export const Checkbox = createJsxElement<
  HTMLInputElement,
  Partial<CheckboxProps>
>(ReakitCheckbox, 'checkbox');

export { useCheckbox } from 'reakit';
