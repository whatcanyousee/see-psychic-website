import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { ScrollToTopButtonComponent } from './components/scroll-to-top-button/scroll-to-top-button.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [RouterModule, LanguageService],
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    BottomSectionComponent,
    ScrollToTopButtonComponent,
  ],
})
export class AppComponent {
  @ViewChild('scrollableContent', { static: true })
  scrollableContent!: HTMLDivElement;
}
