import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-download-buttons',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './download-buttons-section.component.html',
  styleUrl: './download-buttons-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadButtonsComponent {
  downloadNowText: Promise<string> = this.getTranslation('DOWNLOAD_NOW');

  constructor(private languageService: LanguageService){}

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }
 }
