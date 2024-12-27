import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';
  loginSubmitted: boolean = false;
  loginSuccess: boolean = true;
  correctPassword: string = 'password123';

  constructor(private router: Router) {}

  login() {
    if (this.password === this.correctPassword) {
      this.loginSuccess = true;
      this.router.navigate(['/dashboard']);
    } else {
      this.loginSuccess = false;
      alert('Invalid Password');
    }
  }
  Register(){
    this.router.navigate(['/register']);
  }
  closeLoginModal() {
    this.loginSubmitted = false;  // Close the modal
  } 
}
