import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForexComponent } from './forex/forex.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravellerDetailsComponent } from './traveller-details/traveller-details.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { SummaryComponent } from './summary/summary.component';

// Define the routes
export const routes: Routes = [  // Export routes
  { path: '', redirectTo: '/forex', pathMatch: 'full' },
  { path: 'forex', component: ForexComponent },
  { path: 'travel-details', component: TravelDetailsComponent },
  { path: 'traveller-details', component: TravellerDetailsComponent },
  { path: 'document-details', component: DocumentDetailsComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Use the routes here
  exports: [RouterModule]
})
export class AppRoutingModule {}
