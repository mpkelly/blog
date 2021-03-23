import {createElement, Element} from "../../Element";

export const FlexRow:Element = {display:"flex"};

export const Row = createElement<HTMLDivElement>("div", "row", FlexRow)
