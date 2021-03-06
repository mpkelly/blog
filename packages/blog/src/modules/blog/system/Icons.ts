import { Icon, IconBundle } from 'system/icons/IconBundle';

const icon = (className: string): Icon => ({
  className: `ph-${className}-fill`,
});

export const SystemIcons: IconBundle = {
  linkUrl: 'https://unpkg.com/phosphor-icons@1.2.0/src/css/phosphor.css',
  icons: {
    left_arrow: icon('arrow-left'),
    right_arrow: icon('arrow-right'),
    dribble: icon('dribbble-logo'),
    github: icon('github-logo'),
    home: icon('house'),
    company: icon('buildings'),
    location: icon('map-pin'),
    date: icon('calendar'),
    print: icon('printer'),
    email: icon('envelope-simple'),
  },
};
