import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@Component({
  imports: [RouterModule, AppFooterComponent, AppHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ggsforex';
}
