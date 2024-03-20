import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-trainer-explainer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './trainer-explainer-section.component.html',
  styleUrl: './trainer-explainer-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainerExplainerComponent {
  whatIsAText: Promise<string> = this.getTranslation('WHAT_IS_A');
  psychicTrainerText: Promise<string> = this.getTranslation('PSYCHIC_TRAINER');
  toolForPracticeText: Promise<string> = this.getTranslation('A_TOOL_FOR_PRACTICE');

  constructor(private languageService: LanguageService){}

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }
 }
