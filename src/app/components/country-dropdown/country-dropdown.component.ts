import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-country-dropdown',
  standalone: true,
  templateUrl: './country-dropdown.component.html',
  styleUrls: ['./country-dropdown.component.scss'],
  imports: [CommonModule],
})
export class CountryDropdownComponent {
  selectedFlag = 'assets/images/flags/en.png';
  isOpen = false;

  countries = [
    { flag: 'assets/images/flags/en.png', value: 'en' },
    { flag: 'assets/images/flags/es.png', value: 'es' },
    { flag: 'assets/images/flags/ar.png', value: 'ar' },
    // Add more countries as needed
  ];

  languageCode: string = 'en';

  constructor(
    private languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.getLanguageCode();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectCountry(country: any) {
    if (isPlatformBrowser(this.platformId)) {
    }
    this.selectedFlag = country.flag;
    this.isOpen = false;
    if (country === 'en') {
      window.location.href = `https://seepsychictrainer.com/`;
    } else {
      window.location.href = `https://${country}.seepsychictrainer.com/`;
    }
  }

  closeDropdown() {
    this.isOpen = false;
  }

  async getLanguageCode() {
    this.languageCode = await this.languageService.getLanguageCode();
    this.selectedFlag = `assets/images/flags/${this.languageCode}.png`;
  }
}
