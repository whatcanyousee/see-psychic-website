import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import SignaturePad from 'signature_pad';
import { symbolList } from './symbols';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('signaturePadCanvas') signaturePadCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('signatureContainer') signatureContainer!: ElementRef<HTMLCanvasElement>;

  @ViewChild('clearButton') clearButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('revealButton') revealButton!: ElementRef<HTMLButtonElement>;

  signaturePad!: SignaturePad;
  symbolList = symbolList;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'special-background');
  }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.signaturePadCanvas.nativeElement, {
      minWidth: 2,
      maxWidth: 4,
    });

    this.resizeCanvas();
    this.clearButton.nativeElement.addEventListener('click', () => this.clearCanvas());
    this.revealButton.nativeElement.addEventListener('click', () => this.revealSymbol());
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'special-background');
  }

  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.signaturePadCanvas.nativeElement;
    const containerHeight = this.signatureContainer.nativeElement;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = containerHeight.clientHeight * ratio;
    canvas.getContext('2d')?.scale(ratio, ratio);
    const storedData = this.signaturePad.toData();
    this.signaturePad.clear();
    this.signaturePad.fromData(storedData);
  }

  clearCanvas() {
    this.signaturePad.clear();
    this.toggleIconContainer(false);
  }

  revealSymbol() {
    const icon = this.getRandomSymbol();
    document.getElementById("reveal_icon")!.textContent = icon;
    this.toggleIconContainer(true);
    document.querySelector('#reveal_icon')!.scrollIntoView({behavior: 'smooth'});
  }

  getRandomSymbol() {
    const iconTemp = this.symbolList[Math.floor(Math.random() * this.symbolList.length)];
    return String.fromCharCode(iconTemp);
  }

  toggleIconContainer(isDisplayed: boolean) {
    const container = document.getElementById("icon-reveal-container");
    container!.style.display = isDisplayed ? "flex" : "none";
  }

 }
