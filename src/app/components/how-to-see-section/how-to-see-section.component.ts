import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-how-to-see',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './how-to-see-section.component.html',
  styleUrl: './how-to-see-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowToSeeComponent { }
