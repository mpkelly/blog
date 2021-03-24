import { Group as ReakitGroup, GroupProps } from 'reakit';
import { createJsxElement } from '../Element';

export const Group = createJsxElement<HTMLDivElement, Partial<GroupProps>>(
  ReakitGroup,
  'group'
);
