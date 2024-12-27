import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  formSubmitted: boolean = false;
  successMessage: boolean = true;
  private apiUrl = 'https://codingexercise.speakcore.com/api/registrations';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false]
    });
  }

  register() {
    if (this.registrationForm.valid) {
      this.successMessage = true;
      const key = this.registrationForm.value.email;
      this.http.post(`${this.apiUrl}?key=${key}`, this.registrationForm.value).subscribe(
        response => {
          alert('Registration Successful');
        },
        error => {
          alert('Registration Failed');
        }
      );
    } else {
      this.successMessage = false;
      alert('Please fill out the form correctly.');
    }
  }
  closeModal() {
    this.formSubmitted = false;  // Close the modal
  }
} 
