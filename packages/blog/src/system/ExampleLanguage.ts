import { LanguageBundleSet } from '@mpkelly/react-i18n';

export const RootLanguageBundle: LanguageBundleSet = {
  corporate: async () => ({
    brand: 'Acme Inc',
    home: 'Home',
    about: 'About',
    changeLanguage: 'change language',
    main: (p1: any, p2: any) => `this is the value ${p1} ${p2}`,
  }),
  lorem: async () => ({
    brand: 'Acme Inc',
    home: 'Lorem',
    about: 'Ipsum',
    changeLanguage: 'change language',
    main: (p1: any, p2: any) => `this is the value ${p1} ${p2}`,
  }),
};
