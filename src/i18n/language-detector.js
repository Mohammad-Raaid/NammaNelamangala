import * as RNLocalize from 'react-native-localize'

const locales = RNLocalize.getLocales()

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    // We will get back a string like "en-US". We
    // return a string like "en" to match our language
    // files.
    console.log(locales[0].languageTag.split('-')[0])
    callback(locales[0].languageTag.split('-')[0])
  },
  init: () => {},
  cacheUserLanguage: () => {},
}

export default languageDetector
