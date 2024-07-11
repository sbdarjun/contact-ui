import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListHomeComponent } from './contact-list-home.component';

describe('ContactListHomeComponent', () => {
  let component: ContactListHomeComponent;
  let fixture: ComponentFixture<ContactListHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListHomeComponent]
    });
    fixture = TestBed.createComponent(ContactListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
