import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // Import the exported routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Provide the routes here
  ]
}).catch(err => console.error(err));
