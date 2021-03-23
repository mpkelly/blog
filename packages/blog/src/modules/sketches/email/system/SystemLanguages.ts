import { LanguageBundleSet } from '@mpkelly/react-i18n';
import { EnglishLanguageBundle } from './EnglishLanguageBundle';

export const SystemLanguages: LanguageBundleSet = {
  en: async () => EnglishLanguageBundle,
};
