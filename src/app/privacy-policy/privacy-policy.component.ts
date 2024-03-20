import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
  privacyPolicyTitleText: Promise<string> = this.getTranslation('PRIVACY_POLICY_LINK');
  topText: Promise<string> = this.getTranslation('TOP_TEXT');
  secondText: Promise<string> = this.getTranslation('SECOND_TEXT');
  disclaimerText: Promise<string> = this.getTranslation('DISCLAMER_PARAGRAPH');
  changesTitleText: Promise<string> = this.getTranslation('CHANGES_TITLE');
  changesParagraphText: Promise<string> = this.getTranslation('CHANGES_PARAGRAPH');
  logDataTitleText: Promise<string> = this.getTranslation('LOG_DATA_TITLE');
  logDataParagraphText: Promise<string> = this.getTranslation('LOG_DATA_PARAGRAPH');
  securityTitleText: Promise<string> = this.getTranslation('SECURTY_TITLE');
  securityParagraphText: Promise<string> = this.getTranslation('SECURTY_PARAGRAPH');
  linskToSitesTitleText: Promise<string> = this.getTranslation('LINKS_TO_OTHER_SIGHTS_TITLE');
  linskToSitesParagraphText: Promise<string> = this.getTranslation('LINKS_TO_OTHER_SIGHTS_PARAGRAPH');
  changeToPolicyTitleText: Promise<string> = this.getTranslation('CHANGES_TO_POLICY_TITLE');
  changeToPolicyParagraphText: Promise<string> = this.getTranslation('CHANGES_TO_POLICY_PARAGRAPH');
  homeLinkText: Promise<string> = this.getTranslation('NAVBAR_TITLE_HOME_LINK');

  constructor(private router: Router, private languageService: LanguageService) {}

  triggerNav() {
    this.router.navigate(['/']);
  }

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }
}
