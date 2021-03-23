import {Radio as ReakiRadio, RadioProps} from "reakit";
import {createJsxElement} from "../../Element";

export const Radio = createJsxElement<HTMLInputElement, Partial<RadioProps>>(ReakiRadio, "radio");

export {useRadio, useRadioState, RadioGroup} from "reakit";