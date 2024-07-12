import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Contact List',
        icon: 'pi pi-home'
    },
    {
      label: 'Add Contact',
      icon: 'pi pi-plus'
  },
    ];
  }
}
