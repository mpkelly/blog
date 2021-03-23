import { createElement } from '../../Element';
import { ImgHTMLAttributes } from 'react';

export const Image = createElement<HTMLImageElement, ImgHTMLAttributes<any>>(
  'img',
  'image'
);
