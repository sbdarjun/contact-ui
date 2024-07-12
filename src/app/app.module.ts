import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListHomeComponent } from './contact-list-home/contact-list-home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { ContactService } from './contact.service';

@NgModule({
  declarations: [AppComponent, ContactListHomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    AccordionModule,
    ToastModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
