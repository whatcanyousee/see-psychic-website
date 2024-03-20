import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { en } from '../../assets/i18n/en';
import { es } from '../../assets/i18n/es';
import { isPlatformBrowser } from '@angular/common';

interface LanguageTranslations {
  [lang: string]: {
    [key: string]: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translations: LanguageTranslations = {
    en: en,
    es: es,
    // Add more language translations as needed
  };
  globalLanguage: string | null = 'en';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async setLanguage(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.globalLanguage = lang && this.translations[lang] ? lang : 'en';
      localStorage.setItem('lang', lang);
    }
  }

  async getTranslation(key: string): Promise<string> {
    if (isPlatformBrowser(this.platformId)) {
      this.globalLanguage = localStorage.getItem('lang');
      const text = this.translations[this.globalLanguage!]?.[key] || '';
      return text;
    }
    return '';
  }

  async getLanguageCode() {
    if (isPlatformBrowser(this.platformId)) {
      const lang = localStorage.getItem('lang');
      return lang || 'en';
    }
    return 'en';
  }
}
