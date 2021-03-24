import { createElement } from '../Element';
import { ImgHTMLAttributes } from 'react';

export const Thumbnail = createElement<
  HTMLImageElement,
  ImgHTMLAttributes<any>
>('img', 'thumbnail');
