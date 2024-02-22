import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trainer-explainer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './trainer-explainer-section.component.html',
  styleUrl: './trainer-explainer-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainerExplainerComponent { }
