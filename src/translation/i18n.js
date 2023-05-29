import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import i18n_enGB from '../locales/en-GB/i18n.json';
import i18n_vi from '../locales/vi/i18n.json';
import i18n_zhTW from '../locales/zh-TW/i18n.json';
import i18n_ko from '../locales/ko/i18n.json';
import i18n_ja from '../locales/ja/i18n.json';
import i18n_fr from '../locales/fr/i18n.json';
import i18n_th from '../locales/th/i18n.json';
import i18n_es from '../locales/es/i18n.json';
import i18n_pt from '../locales/pt/i18n.json';
import i18n_de from '../locales/de/i18n.json';
import i18n_it from '../locales/it/i18n.json';

// the translations
const resources = {
    enGB: {
        translation: i18n_enGB
    },
    vi: {
        translation: i18n_vi
    },
    zhTW: {
        translation: i18n_zhTW
    },
    ko: {
        translation: i18n_ko
    },
    ja: {
        translation: i18n_ja
    },
    fr: {
        translation: i18n_fr
    },
    th: {
        translation: i18n_th
    },
    es: {
        translation: i18n_es
    },
    pt: {
        translation: i18n_pt
    },
    de: {
        translation: i18n_de
    },
    it: {
        translation: i18n_it
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;