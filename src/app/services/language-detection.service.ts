import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
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

  constructor(private location: Location) {}

  detectLanguage(): Observable<string> {
    const host = this.location.path().split('/')[2];
    const subdomainMatch = host.match(/^([a-z]{2})\./);

    if (subdomainMatch) {
      const subdomain = subdomainMatch[1];
      if (this.supportedLanguages.includes(subdomain)) {
        return of(subdomain);
      }
    }

    return of('en'); // Default to English if no supported language subdomain is found
  }
}