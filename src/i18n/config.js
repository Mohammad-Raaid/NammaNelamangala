export const fallback = 'en'
export const supportedLocales = {
  kn: {
    name: 'Kannada',
    translationFileLoader: () => require('../assets/translations/kn.json'),
    // momentLocaleLoader: () => import('moment/locale/kn'),
  },
  en: {
    name: 'English',
    translationFileLoader: () => require('../assets/translations/en.json'),
    // en is default locale in Moment
    momentLocaleLoader: () => Promise.resolve(),
  },
  te: {
    name: 'Telugu',
    translationFileLoader: () => require('../assets/translations/te.json'),
    // en is default locale in Moment
    // momentLocaleLoader: () => import('moment/locale/te'),
  },
  ta: {
    name: 'Tamil',
    translationFileLoader: () => require('../assets/translations/ta.json'),
    // en is default locale in Moment
    // momentLocaleLoader: () => import('moment/locale/ta'),
  },
  hi: {
    name: 'Hindi',
    translationFileLoader: () => require('../assets/translations/hi.json'),
    // en is default locale in Moment
    // momentLocaleLoader: () => import('moment/locale/hi'),
  },
}
export const defaultNamespace = 'translations'
export const namespaces = ['translations']
