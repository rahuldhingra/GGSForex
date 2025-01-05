import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class DocumentDetailsComponent {
  constructor(private router: Router) {}

  uploadOption: string = 'later'; // Default to 'Upload Later'
  isConfirmed: boolean = false;

  // Allowed file types
  allowedFileTypes = ['pdf', 'jpg', 'jpeg', 'png'];

  // Maximum file size in bytes (2MB)
  maxFileSize = 2 * 1024 * 1024;

  // Handle file change and validate
  onFileChange(event: any, fieldName: string) {
    const file = event.target.files[0];

    if (file) {
      // Validate file size
      if (file.size > this.maxFileSize) {
        alert(`${fieldName} exceeds the maximum size of 2MB.`);
        event.target.value = ''; // Clear the input
        return;
      }

      // Validate file type
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!this.allowedFileTypes.includes(fileExtension || '')) {
        alert(`${fieldName} must be in PDF, JPG, JPEG, or PNG format.`);
        event.target.value = ''; // Clear the input
        return;
      }
    }
  }

  // Handle form submission
  submitDocumentForm(form: any): void {
    if (form.valid) {
      console.log('Document form submitted');
      // Add your form submission logic here

      // Navigate to the next page (summary or another route)
      this.router.navigate(['/summary']);
    } else {
      console.log('Form is invalid');
    }
  }

  // Go back to the previous page
  goBack(): void {
    this.router.navigate(['/traveller-details']);
  }
}
