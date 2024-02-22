import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top-button.component.html',
  styleUrl: './scroll-to-top-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollToTopButtonComponent {
  showButton = false;
  private scrollableElement: HTMLElement | null = null;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Try to attach to a specific known scrollable element by ID or class
    this.scrollableElement = document.querySelector('.scrollable-content');
    if (this.scrollableElement) {
      this.scrollableElement.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (this.scrollableElement) {
      this.scrollableElement.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  onScroll = () => {
    if (this.scrollableElement) {
      const scrollTop = this.scrollableElement.scrollTop;
      const height = this.scrollableElement.scrollHeight - this.scrollableElement.clientHeight;
      this.showButton = scrollTop > (height * 0.8);
      this.cdRef.detectChanges();
    }
  };

  scrollToTop() {
    if (this.scrollableElement) {
      this.scrollableElement.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
}
