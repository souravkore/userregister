import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userData: any;
  private apiUrl = 'https://codingexercise.speakcore.com/api/registrations';

  constructor(private http: HttpClient) {}

  getUserData(email: string, id: string) {
    this.http.get(`${this.apiUrl}/${id}?key=${email}`).subscribe(
      response => {
        this.userData = response;
      },
      error => {
        alert('Failed to fetch user data.');
      }
    );
  }
  
}
