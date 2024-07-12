import { Component, OnInit } from '@angular/core';
import { Institution } from '../models/institution.model';
import { ContactService } from '../contact.service';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contact-list-home',
  templateUrl: './contact-list-home.component.html',
  styleUrls: ['./contact-list-home.component.css'],
})
export class ContactListHomeComponent implements OnInit {
  institutions!: Institution[];
  items: MenuItem[] | undefined;
  expandedRows = {};
  filteredInstitutions: Institution[] = [];

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getContactList();
    this.items = [
      {
        label: 'Contact List',
        icon: 'pi pi-home',
      },
      {
        label: 'Add Contact',
        icon: 'pi pi-plus',
      },
    ];
  }

  private getContactList() {
    this.contactService.getInstitutions().subscribe((data) => {
      this.institutions = data;
      this.filteredInstitutions = [...this.institutions];
    });
  }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Expanded',
      detail: event.data.institutionName,
      life: 3000,
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Collapsed',
      detail: event.data.institutionName,
      life: 3000,
    });
  }
  onSearchInputChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      const value = target.value.toLowerCase();
      if (value) {
        this.filteredInstitutions = this.institutions.filter((institution) =>
          institution.institutionName.toLowerCase().includes(value)
        );
      } else {
        this.filteredInstitutions = [...this.institutions]; // Show all data if input is empty
      }
    }
  }
}
