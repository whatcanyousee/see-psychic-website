import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss'],
})
export class ScrollToTopButtonComponent implements AfterViewInit, OnDestroy {
  showButton = false;
  @Input() scrollableContent!: HTMLDivElement;

  private scrollListener: () => void;

  constructor(private cdRef: ChangeDetectorRef) {
    this.scrollListener = this.onScroll.bind(this);
  }

  ngAfterViewInit() {
    this.scrollableContent.addEventListener('scroll', this.scrollListener);
    this.onScroll();
  }

  ngOnDestroy() {
    this.scrollableContent.removeEventListener('scroll', this.scrollListener);
  }

  onScroll() {
    if (this.scrollableContent) {
      const scrollTop = this.scrollableContent.scrollTop;
      const height = this.scrollableContent.scrollHeight - this.scrollableContent.clientHeight;
      this.showButton = scrollTop > height * 0.8;
      this.cdRef.detectChanges();
    }
  }

  scrollToTop() {
    if (this.scrollableContent) {
      this.scrollableContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
