import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-unlock-psychic-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './unlock-psychic-section.component.html',
  styleUrl: './unlock-psychic-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnlockPsychicSectionComponent {
  innerPsychicText: Promise<string> = this.getTranslation('UNLOCK_YOUR_INNER_PSYCHIC');
  unlockParagraph: Promise<string> = this.getTranslation('UNLOCK_PARAGRAPH');

  constructor(private languageService: LanguageService) {}

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }
 }
