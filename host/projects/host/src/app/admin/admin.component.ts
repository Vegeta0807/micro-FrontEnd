import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isEditing = false;
  personalDetailsForm: FormGroup;

  personalDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  };

  constructor(private fb: FormBuilder) {
    this.personalDetailsForm = this.fb.group({
      name: [this.personalDetails.name],
      email: [this.personalDetails.email],
      phone: [this.personalDetails.phone],
      address: [this.personalDetails.address]
    });
  }

  ngOnInit(): void {
  }

  
  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.updatePersonalDetails();
    }
  }

  updatePersonalDetails() {
    this.personalDetails = this.personalDetailsForm.value;
    console.log('Personal details updated:', this.personalDetails);
  }
}
