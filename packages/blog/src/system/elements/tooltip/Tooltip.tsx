import {
  Tooltip as ReakitTooltip,
  TooltipProps,
  TooltipReference as ReakitTooltipReference,
  TooltipReferenceProps,
} from 'reakit';
import { createJsxElement } from '../Element';

export const Tooltip = createJsxElement<HTMLDivElement, Partial<TooltipProps>>(
  ReakitTooltip,
  'tooltip'
);

export const TooltipReference = createJsxElement<
  HTMLDivElement,
  Partial<TooltipReferenceProps>
>(ReakitTooltipReference, 'tooltipreference');

export { useTooltipState } from 'reakit';
