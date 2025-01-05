import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Toggle the page overlay class
    const overlay = document.querySelector('.page-overlay') as HTMLElement;
    if (this.isMobileMenuOpen) {
      overlay.classList.add('active');
    } else {
      overlay.classList.remove('active');
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;

    // Ensure the overlay is also removed when closing the menu
    const overlay = document.querySelector('.page-overlay') as HTMLElement;
    overlay.classList.remove('active');
  }
}
