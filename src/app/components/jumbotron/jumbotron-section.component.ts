import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './jumbotron-section.component.html',
  styleUrl: './jumbotron-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumbotronComponent { }
