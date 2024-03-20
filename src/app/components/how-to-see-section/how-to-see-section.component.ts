import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-how-to-see',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-see-section.component.html',
  styleUrl: './how-to-see-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowToSeeComponent {
  seeforYourselfText: Promise<string> = this.getTranslation('SEE_FOR_YOURSELF');
  yourAreMagicalText: Promise<string> = this.getTranslation('YOU_ARE_MAGICAL');
  howToText: Promise<string> = this.getTranslation('HOW_TO');
  step1Text: Promise<string> = this.getTranslation('HOW_SEE_STEP_1');
  step2Text: Promise<string> = this.getTranslation('HOW_SEE_STEP_2');
  step3Text: Promise<string> = this.getTranslation('HOW_SEE_STEP_3');
  step4Text: Promise<string> = this.getTranslation('HOW_SEE_STEP_4');
  tryItFreeText: Promise<string> = this.getTranslation('TRY_FREE_ONLINE');

  languageCode: Promise<string> = this.getlanguageCode();

  constructor(private languageService: LanguageService) {}

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }

  getlanguageCode(): Promise<string> {
    return this.languageService.getLanguageCode();
  }
}
