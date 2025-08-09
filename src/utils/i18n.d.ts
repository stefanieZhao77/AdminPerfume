// Type definitions for i18n utility

export function getCurrentLanguage(): string;
export function setLanguage(lang: string): void;
export function getLanguageInfo(lang?: string): { name: string; flag: string; translations: Record<string, string> };
export function t(key: string, lang?: string): string;
export function getAvailableLanguages(): { code: string; name: string; flag: string }[];
export const DEFAULT_LANGUAGE: string;
export const languages: Record<string, { name: string; flag: string; translations: Record<string, string> }>;

