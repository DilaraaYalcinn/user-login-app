import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Handles the login process when the user submits the form
   */
  onLogin() {
    const payload = {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.http.post('http://localhost:3000/api/login', payload).subscribe(
      (response: any) => {
        if (response.status === 'ok') {
          alert(response.message); // Welcome user message
          this.router.navigate(['/dashboard']); // Redirect to dashboard or home
        } else {
          alert(response.message); // Error message
        }
      },
      (error) => {
        alert('Error: Unable to login');
      }
    );
  }
}
