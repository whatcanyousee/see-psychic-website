import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './bottom-section.component.html',
  styleUrl: './bottom-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    RouterModule
  ]
})
export class BottomSectionComponent {

  constructor(private router: Router) { }

  triggerNav() {
    this.router.navigate(['/privacy-policy']);
  }
}
