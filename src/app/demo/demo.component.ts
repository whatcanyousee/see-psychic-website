import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import SignaturePad from 'signature_pad';
import { symbolList } from './symbols';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('signaturePadCanvas', { static: false }) signaturePadCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('signatureContainer', { static: false }) signatureContainer!: ElementRef<HTMLElement>;
  @ViewChild('revealIcon', { static: false }) revealIcon!: ElementRef<HTMLElement>;
  @ViewChild('iconRevealContainer', { static: false }) iconRevealContainer!: ElementRef<HTMLElement>;

  @HostBinding('class.special-background') specialBackground = true;

  signaturePad!: SignaturePad;
  symbolList = symbolList;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.signaturePadCanvas) {
        this.signaturePad = new SignaturePad(
          this.signaturePadCanvas.nativeElement,
          {
            minWidth: 2,
            maxWidth: 4,
          }
        );
        this.resizeCanvas();
      }
    }
  }

  ngOnDestroy(): void {
    this.specialBackground = false;
  }

  @HostListener('window:resize')
  resizeCanvas() {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.signaturePadCanvas?.nativeElement;
      const containerHeight = this.signatureContainer?.nativeElement?.clientHeight;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      if (canvas) {
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = containerHeight * ratio;
        canvas.getContext('2d')?.scale(ratio, ratio);
        const storedData = this.signaturePad.toData();
        this.signaturePad.clear();
        this.signaturePad.fromData(storedData);
      }
    }
  }

  clearCanvas() {
    if (isPlatformBrowser(this.platformId)) {
      this.signaturePad.clear();
      this.toggleIconContainer(false);
    }
  }

  revealSymbol() {
    if (isPlatformBrowser(this.platformId)) {
      const icon = this.getRandomSymbol();
      this.revealIcon.nativeElement.textContent = icon;
      this.toggleIconContainer(true);
      this.revealIcon.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getRandomSymbol() {
    const iconTemp = this.symbolList[Math.floor(Math.random() * this.symbolList.length)];
    return String.fromCharCode(iconTemp);
  }

  toggleIconContainer(isDisplayed: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      this.iconRevealContainer.nativeElement.style.display = isDisplayed ? 'flex' : 'none';
    }
  }
}
