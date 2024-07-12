import { Component, OnInit } from '@angular/core';
import { Institution } from '../models/institution.model';
import { ContactService } from '../contact.service';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-list-home',
  templateUrl: './contact-list-home.component.html',
  styleUrls: ['./contact-list-home.component.css'],
})
export class ContactListHomeComponent implements OnInit {
  institutions!: Institution[];
  expandedRows = {};

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getContactList();
  }

  private getContactList() {
    this.contactService.getInstitutions().subscribe((data) => {
      this.institutions = data;
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
}
