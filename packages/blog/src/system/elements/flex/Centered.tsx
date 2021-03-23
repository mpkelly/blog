import { createElement } from '../../Element';

export const Centered = createElement<HTMLDivElement>('div', 'centered', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
