import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListHomeComponent } from './contact-list-home/contact-list-home.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  { path: 'contact-list', component: ContactListHomeComponent },
  { path: 'add-contact', component: AddContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
