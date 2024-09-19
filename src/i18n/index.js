import i18next from 'i18next'
import { I18nManager as RNI18nManager } from 'react-native'

import * as config from './config'

import date from './date'
import languageDetector from './language-detector'

import en from '../assets/translations/en.json'
import kn from '../assets/translations/kn.json'
import te from '../assets/translations/te.json'
import ta from '../assets/translations/ta.json'
import hi from '../assets/translations/hi.json'

const i18n = {
  /**
   * @returns {Promise}
   */
  init: (callback, forceLanguage) => {
    return new Promise((resolve, reject) => {
      i18next.use(languageDetector).init(
        {
          compatibilityJSON: 'v3',
          fallbackLng: config.fallback,
          ns: config.namespaces,
          lng: forceLanguage,
          defaultNS: config.defaultNamespace,
          interpolation: {
            escapeValue: false,
            format(value, format) {
              if (value instanceof Date) {
                return date.format(value, format)
              }
            },
          },
          react: {
            wait: true,
          },
          resources: {
            // Using hardcoded resources
            en: { translations: en },
            kn: { translations: kn },
            te: { translations: te },
            ta: { translations: ta },
            hi: { translations: hi },
          },
        },
        (error) => {
          if (error) {
            return reject(error)
          }

          date
            .init(i18next.language)
            .then(callback ? callback() : resolve)
            .catch((error) => reject(error))
        }
      )
    })
  },

  /**
   * @param {string} key
   * @param {Object} options
   * @returns {string}
   */
  t(key, options) {
    return i18next.t(key, options)
  },

  /**
   * @returns {string}
   */
  get locale() {
    return i18next.language
  },

  /**
   * @returns {'LTR' | 'RTL'}
   */
  get dir() {
    return i18next.dir().toUpperCase()
  },

  /**
   * @returns {boolean}
   */
  get isRTL() {
    return RNI18nManager.isRTL
  },

  /**
   * Similar to React Native's Platform.select(),
   * i18n.select() takes a map with two keys, 'rtl'
   * and 'ltr'. It then returns the value referenced
   * by either of the keys, given the current
   * locale's direction.
   *
   * @param {Object<string,mixed>} map
   * @returns {mixed}
   */
  select(map) {
    const key = this.isRTL ? 'rtl' : 'ltr'

    return map[key]
  },
}

export const t = i18n.t

export default i18n
