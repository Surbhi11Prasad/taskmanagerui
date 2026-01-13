import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../app/services/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="background:#1976d2;color:white;padding:12px 20px;">
      <strong>Task Manager</strong>
      <button
        style="float:right"
        class="btn-danger"
        (click)="logout()"
      >
        Logout
      </button>
    </div>
  `,
})
export class Header {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
