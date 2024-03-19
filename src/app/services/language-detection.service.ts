import { DOCUMENT, Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageDetectionService {
  private supportedLanguages: string[] = [
    'ar', 'bn', 'de', 'el',
    'en', 'es', 'fr', 'he',
    'hi', 'id', 'it', 'ja',
    'ko', 'nl', 'pl', 'ru',
    'sv', 'sw', 'vi', 'zh',
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  detectLanguage(): Observable<string> {
    const window = this.document.defaultView;
    const host = window?.location.href.split('/')[2];
    const subdomainMatch = host?.match(/^([a-z]{2})\./);

    if (subdomainMatch) {
      const subdomain = subdomainMatch[1];
      if (this.supportedLanguages.includes(subdomain)) {
        return of(subdomain);
      }
    }

    return of('en'); // Default to English if no supported language subdomain is found
  }
}
