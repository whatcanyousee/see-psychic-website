import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  isMobileScreen: boolean = this.checkIfMobileScreen();
  isMobileScreenChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {

    this.emitScreenSizeChange();

    window.addEventListener('resize', () => {
      const isMobile = this.checkIfMobileScreen();
      if (this.isMobileScreen !== isMobile) {
        this.isMobileScreen = isMobile;
        this.emitScreenSizeChange();
      }
    });
  }

  private checkIfMobileScreen(): boolean {
    return window.innerWidth <= 768;
  }

  private emitScreenSizeChange(): void {
    this.isMobileScreenChange.emit(this.isMobileScreen);
  }
}
