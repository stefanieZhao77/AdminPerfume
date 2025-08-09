// Internationalization utility
import zh from '../locales/zh.js';
import en from '../locales/en.js';

// Available languages
export const languages = {
  zh: { name: '中文', flag: '🇨🇳', translations: zh },
  en: { name: 'English', flag: '🇺🇸', translations: en }
};

// Default language - now Chinese
export const DEFAULT_LANGUAGE = 'zh';

// Get current language from localStorage or default
export function getCurrentLanguage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('adminlte-language') || DEFAULT_LANGUAGE;
  }
  return DEFAULT_LANGUAGE;
}

// Set language in localStorage
export function setLanguage(lang) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminlte-language', lang);
    // Reload page to apply language change
    window.location.reload();
  }
}

// Translation function
export function t(key, lang = null) {
  const currentLang = lang || getCurrentLanguage();
  const translations = languages[currentLang]?.translations || languages[DEFAULT_LANGUAGE].translations;
  return translations[key] || key;
}

// Get language info
export function getLanguageInfo(lang = null) {
  const currentLang = lang || getCurrentLanguage();
  return languages[currentLang] || languages[DEFAULT_LANGUAGE];
}

// Get all available languages for dropdown
export function getAvailableLanguages() {
  return Object.entries(languages).map(([code, info]) => ({
    code,
    name: info.name,
    flag: info.flag
  }));
}
