import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-embed-section.component.html',
  styleUrl: './video-embed-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoEmbedSectionComponent {
  videoSource: SafeResourceUrl | string = '';
  readonly url =
    'https://odysee.com/$/embed/@whatcanyousee:0/actual-results:b?r=Cq86SrLjYfGeYEz6jRHHe4NppZ5FBQu2';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
