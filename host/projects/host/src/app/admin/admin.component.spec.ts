import { ComponentFixture, TestBed } from '@angular/core/testing';
// import 'zone.js/dist/zone';
// import 'zone.js/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with personal details', () => {
    expect(component.personalDetailsForm.value).toEqual(
      component.personalDetails
    );
  });

  it('should toggle edit mode', () => {
    expect(component.isEditing).toBeFalse();
    component.toggleEdit();
    expect(component.isEditing).toBeTrue();
  });

  it('should update personal details when edit is toggled off', () => {
    component.toggleEdit(); // Enter edit mode
    component.personalDetailsForm.setValue({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '987-654-3210',
      address: '456 Another St, Sometown, USA',
    });
    component.toggleEdit(); // Exit edit mode and update details
    expect(component.personalDetails).toEqual({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '987-654-3210',
      address: '456 Another St, Sometown, USA',
    });
  });
});
