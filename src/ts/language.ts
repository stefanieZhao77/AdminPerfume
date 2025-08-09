/**
 * Language Management System
 * Handles language switching and translation updates
 */

import { getCurrentLanguage, setLanguage, getLanguageInfo, t } from '../utils/i18n.js'

export class LanguageManager {
  private currentLanguage: string
  private initialized: boolean = false

  constructor() {
    this.currentLanguage = getCurrentLanguage()
    this.init()
  }

  /**
   * Initialize language system
   */
  private init(): void {
    if (this.initialized) return
    
    this.updatePageLanguage()
    this.bindLanguageToggle()
    this.updateCurrentLanguageFlag()
    this.initialized = true
  }

  /**
   * Update all translatable elements on the page
   */
  private updatePageLanguage(): void {
    const elements = document.querySelectorAll('[data-i18n], [data-i18n-title], [data-i18n-placeholder]')

    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n')
      if (key) {
        const translation = t(key, this.currentLanguage)
        element.textContent = translation
      }

      const titleKey = element.getAttribute('data-i18n-title')
      if (titleKey) {
        const translation = t(titleKey, this.currentLanguage);
        (element as HTMLElement).title = translation;
      }

      const placeholderKey = element.getAttribute('data-i18n-placeholder')
      if (placeholderKey) {
        const translation = t(placeholderKey, this.currentLanguage);
        (element as HTMLInputElement).placeholder = translation;
      }
    })

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', this.currentLanguage === 'zh' ? 'zh-CN' : 'en')
  }

  /**
   * Update the current language flag in the navbar
   */
  private updateCurrentLanguageFlag(): void {
    const flagElement = document.getElementById('current-language-flag')
    if (flagElement) {
      const languageInfo = getLanguageInfo(this.currentLanguage)
      flagElement.textContent = languageInfo.flag
    }
  }

  /**
   * Bind click events to language toggle options
   */
  private bindLanguageToggle(): void {
    const languageOptions = document.querySelectorAll('.language-option')
    
    languageOptions.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.preventDefault()
        const langCode = option.getAttribute('data-lang')
        if (langCode && langCode !== this.currentLanguage) {
          this.switchLanguage(langCode)
        }
      })
    })
  }

  /**
   * Switch to a different language
   */
  private switchLanguage(langCode: string): void {
    setLanguage(langCode)
    // Page will reload automatically via setLanguage function
  }

  /**
   * Get current language
   */
  public getCurrentLanguage(): string {
    return this.currentLanguage
  }

  /**
   * Manually update translations (useful for dynamic content)
   */
  public updateTranslations(): void {
    this.updatePageLanguage()
  }
}

// Auto-initialize when DOM is ready
export function initLanguageManager(): LanguageManager {
  return new LanguageManager()
}
