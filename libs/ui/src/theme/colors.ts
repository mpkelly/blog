const primaryHue = 47;
const accentHue = 211;
const dangerHue = 17;

export const mainPalette = {
  'accent-1': `hsla(${accentHue}, 60%, 43%, 1)`,

  'text-1': `hsl(${primaryHue}, 50%, 10%)`,
  'text-2': `hsl(${primaryHue}, 50%, 25%)`,

  'bg-1': '$primary-1',

  'primary-1': `hsla(${primaryHue}, 100%, 58%, 1)`,

  'danger-1': `hsla(${dangerHue}, 86%, 49%, 1)`,
};

export const darkPalette = {
  ...mainPalette,

  'text-1': `hsl(0, 0%, 90%)`,
  'text-2': `hsl(0, 00%, 70%)`,

  'bg-1': 'hsla(231, 3%, 1%, 1)',
  'bg-2': 'hsla(231, 3%, 8%, 1)',
};

export const bluePalette = {
  ...mainPalette,

  'text-1': `hsl(0, 0%, 90%)`,
  'text-2': `hsl(0, 20%, 80%)`,

  'bg-1': `hsla(${accentHue}, 60%, 43%, 1)`,
};
