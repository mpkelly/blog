import { Element } from 'elements/Element';

export type IconBundle = {
  linkUrl?: string;
  icons: {
    [key: string]: Icon;
  };
};

export type Icon = {
  ligature?: string;
  className?: string;
  xs?: Element;
};
