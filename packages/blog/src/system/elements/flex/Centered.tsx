import { createElement } from '../Element';

export const Centered = createElement<HTMLDivElement>('div', 'centered', {
  defaultStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
