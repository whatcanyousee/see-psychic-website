// app.config.ts
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LanguageDetectionService } from './services/language-detection.service';
import { LanguageService } from './services/language.service';

export function appInitializerFactory(
  languageDetectionService: LanguageDetectionService,
  languageService: LanguageService
) {
  return () => {
    return languageDetectionService.detectLanguage().toPromise().then(lang => {
      languageService.setLanguage(lang);
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [LanguageDetectionService, LanguageService],
      multi: true
    }
  ],
};
