import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListHomeComponent } from './contact-list-home/contact-list-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
