// app-initializer.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AppInitializer {
  private currentUrl: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getCurrentUrl(): string {
    if (isPlatformBrowser(this.platformId)) {
      this.currentUrl = window.location.href;
    }
    return this.currentUrl;
  }
}

export function initializeApp(appInitializer: AppInitializer) {
  return () => {
    appInitializer.getCurrentUrl();
  };
}
