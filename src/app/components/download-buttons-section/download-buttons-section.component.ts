import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class DownloadButtonsComponent { }
