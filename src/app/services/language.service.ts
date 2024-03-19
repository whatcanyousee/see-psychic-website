import { Injectable } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { en } from '../../assets/i18n/en';
import { es } from '../../assets/i18n/es';

interface LanguageTranslations {
  [lang: string]: {
    [key: string]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translations: LanguageTranslations = {};
  private initializedPromise: Promise<void>;
  globalLanguage: string = 'en';

  constructor() {
    this.initializedPromise = this.loadTranslations();
  }

  async loadTranslations() {
    try {
      this.translations = {
        "en": en,
        "es": es,
        // Add more language translations as needed
      };
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }

  async setLanguage(lang: string | undefined) {
    await this.initializedPromise;
    if (lang && this.translations[lang]) {
      this.globalLanguage = lang;
      loadTranslations(this.translations[lang]);
    } else {
      console.log('Default translations:', this.translations['en']);
      loadTranslations(this.translations['en']);
    }
  }

  async getTranslation(key: string): Promise<string> {
    await this.initializedPromise;
    const text = this.translations[this.globalLanguage]?.[key] || "";
    return text;
  }
}
