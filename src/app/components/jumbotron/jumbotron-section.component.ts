import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

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

  constructor() {}

  checkIfMobileScreen(): boolean {
    return window.innerWidth <= 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileScreen = this.checkIfMobileScreen();
  }
 }
