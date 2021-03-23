import {Tab as ReakitTab, TabProps, TabList as ReakitTabList, TabListProps, TabPanelProps,} from "reakit";
import {createJsxElement} from "../../Element";

export const Tab = createJsxElement<HTMLDivElement, Partial<TabProps>>(ReakitTab, "tab");

export const TabList = createJsxElement<HTMLDivElement, Partial<TabListProps>>(ReakitTabList, "tablist");

export const TabPanel = createJsxElement<HTMLDivElement, Partial<TabPanelProps>>(ReakitTabList, "tabpanel");

export {useTabState} from "reakit";