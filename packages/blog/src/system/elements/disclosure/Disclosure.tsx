import {
  Disclosure as ReakitDisclosure,
  DisclosureProps,
  DisclosureContent as ReakitDisclosureContent,
  DisclosureContentProps,
} from 'reakit';
import { createJsxElement } from '../Element';

export const Disclosure = createJsxElement<
  HTMLDivElement,
  Partial<DisclosureProps>
>(ReakitDisclosure, 'disclosure');

export const DisclosureContent = createJsxElement<
  HTMLDivElement,
  Partial<DisclosureContentProps>
>(ReakitDisclosureContent, 'disclosurecontent');

export { useDisclosureState } from 'reakit';
