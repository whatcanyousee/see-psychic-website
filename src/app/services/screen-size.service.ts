import { DOCUMENT } from '@angular/common';
import { Injectable, EventEmitter, HostListener, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  isMobileScreen: boolean = this.checkIfMobileScreen();
  isMobileScreenChange: EventEmitter<boolean> = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.emitScreenSizeChange();
    this.resizeEvent();
  }

  @HostListener('window:resize', ['$event'])
  resizeEvent() {
    const isMobile = this.checkIfMobileScreen();
    if (this.isMobileScreen !== isMobile) {
      this.isMobileScreen = isMobile;
      this.emitScreenSizeChange();
    }
  }

  private checkIfMobileScreen(): boolean {
    const window = this.document.defaultView;
    if (window) {
      return window.innerWidth <= 768;
    }
    return false;
  }

  private emitScreenSizeChange(): void {
    this.isMobileScreenChange.emit(this.isMobileScreen);
  }
}
