import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traveller-details',
  templateUrl: './traveller-details.component.html',
  styleUrls: ['./traveller-details.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class TravellerDetailsComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/travel-details']);
  }

  next(): void {
    // Navigate to document-details instead of summary
    this.router.navigate(['/document-details']);
  }

  submitTravellerForm(form: any): void {
    this.next(); // Navigate to document-details after form submission
  }
}
