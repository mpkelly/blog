import {Popover as ReakitPopover, PopoverProps, PopoverDisclosure as ReakitPopoverDisclosure, PopoverDisclosureProps, PopoverArrow as ReakitPopoverArrow, PopoverArrowProps} from "reakit";
import {createJsxElement} from "../../Element";

export const Popover = createJsxElement<HTMLDivElement, Partial<PopoverProps>>(ReakitPopover, "popover");

export const PopoverArrow = createJsxElement<HTMLDivElement, Partial<PopoverArrowProps>>(ReakitPopoverArrow, "popoverarrow");

export const PopoverDisclosure = createJsxElement<HTMLDivElement, Partial<PopoverDisclosureProps>>(ReakitPopoverDisclosure, "popoverdisclosure");

export {usePopoverState} from "reakit";