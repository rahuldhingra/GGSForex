import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  constructor(private router: Router) {}

  finish(): void {
    alert('Thank you! Your booking has been confirmed.');
    this.router.navigate(['/forex']);
  }
}
