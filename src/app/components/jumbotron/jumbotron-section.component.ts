import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [CommonModule],
  providers: [LanguageService],
  templateUrl: './jumbotron-section.component.html',
  styleUrl: './jumbotron-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumbotronComponent {
  isMobileScreen: boolean = this.checkIfMobileScreen();

  jumboTrontext: Promise<string> = this.getTranslation('JUMOBTRON_SUBTITLE');

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private languageService: LanguageService
  ) {}

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }

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
