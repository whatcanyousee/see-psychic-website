import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './jumbotron-section.component.html',
  styleUrl: './jumbotron-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumbotronComponent {
  isMobileScreen: boolean = this.checkIfMobileScreen();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  checkIfMobileScreen(): boolean {

    const window = this.document.defaultView;
    if (window) {
      return window.innerWidth <= 768;
    }

    return false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileScreen = this.checkIfMobileScreen();
  }
 }
