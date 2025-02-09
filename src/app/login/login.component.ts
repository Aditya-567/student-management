import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/students']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
