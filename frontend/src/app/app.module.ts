import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component'; 
import { HttpClient } from '@angular/common/http'; 

// Define routes
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,
    CommonModule,
    AppHeaderComponent,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
