import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-unlock-psychic-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './unlock-psychic-section.component.html',
  styleUrl: './unlock-psychic-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnlockPsychicSectionComponent { }
