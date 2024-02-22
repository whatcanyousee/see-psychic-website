import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-video-embed-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './video-embed-section.component.html',
  styleUrl: './video-embed-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoEmbedSectionComponent { }
