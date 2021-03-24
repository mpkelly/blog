import {
  Dialog as ReakitDialog,
  DialogProps,
  DisclosureContent as ReakitDialogDisclosure,
  DialogDisclosureProps,
} from 'reakit';
import { createJsxElement } from '../Element';

export const Dialog = createJsxElement<HTMLDivElement, Partial<DialogProps>>(
  ReakitDialog,
  'dialog'
);

export const DialogDisclosure = createJsxElement<
  HTMLDivElement,
  Partial<DialogDisclosureProps>
>(ReakitDialogDisclosure, 'dialogdisclosure');

export { useDisclosureState } from 'reakit';
