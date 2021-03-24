import { Alias } from 'system/aliases/PropertyAlias';

export type SizeAliasProps = {
  size?: string | number;
};

export const SizeAlias: Alias = {
  name: 'size',
  apply: (value: string | number) => ({ width: value, height: value }),
};
