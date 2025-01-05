import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router service
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class TravelDetailsComponent {
  isDoorDelivery: boolean = false;
  isFieldsVisible: boolean = false;
  isAddressPrefilled: boolean = false;

  pincode: string = '';
  address: string = '';

  prefilledAddress = {
    pincode: '123456',
    address: '123 Main St, City, Country',
  };

  currentDate: string = ''; // Define currentDate property

  constructor(private router: Router) { // Inject Router service
    // Initialize current date to today's date in 'YYYY-MM-DD' format
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
  }

  onDeliveryModeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.isDoorDelivery = target.value === 'doorDelivery';
    this.isFieldsVisible = target.value !== ''; // Show fields if any mode is selected
    this.setPrefilledAddress();
  }

  setPrefilledAddress(): void {
    if (this.isDoorDelivery) {
      this.pincode = ''; // Clear pincode for pickup mode
      this.address = ''; // Clear address for pickup mode
      this.isAddressPrefilled = false; // Reset prefilled flag if it's door delivery
    } else {
      // If in pickup mode, prefill the address
      this.pincode = this.prefilledAddress.pincode;
      this.address = this.prefilledAddress.address;
      this.isAddressPrefilled = true; // Mark fields as prefilled
    }
  }

  submitTravelForm(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted', form.value);

      // Navigate to traveller-details path after form submission
      this.router.navigate(['/traveller-details']);
    }
  }
}
