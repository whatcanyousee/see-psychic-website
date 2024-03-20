import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { CountryDropdownComponent } from "../country-dropdown/country-dropdown.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [CommonModule, RouterModule, CountryDropdownComponent]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isNavbarVisible = false;
  isMobileScreen: boolean = false;
  private screenSizeSubscription!: Subscription;

  homeLink: Promise<string> = this.getTranslation('NAVBAR_TITLE_HOME_LINK');
  demoLink: Promise<string> = this.getTranslation('NAVBAR_TITLE_DEMO_LINK');

  constructor(
    private languageService: LanguageService,
    private screenSizeService: ScreenSizeService,
  ) {
  }

  ngOnInit() {
    this.isMobileScreen = this.screenSizeService.isMobileScreen;
    this.screenSizeSubscription =
      this.screenSizeService.isMobileScreenChange.subscribe((isMobile) => {
        this.isMobileScreen = isMobile;
      });
  }

  getTranslation(key: string): Promise<string> {
    return this.languageService.getTranslation(key);
  }

  toggleNavbar() {
    if (this.isMobileScreen) {
      this.isNavbarVisible = !this.isNavbarVisible;
    }
  }

  ngOnDestroy() {
    this.screenSizeSubscription.unsubscribe();
  }

  closeNavbar() {
    if (this.isMobileScreen) {
      this.isNavbarVisible = false;
    }
  }
}
