import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrl: './auth-buttons.component.scss',
})
export class AuthButtonsComponent {
  private readonly router = inject(Router);

  redirectLogin() {
    this.router.navigate(['auth/login']);
  }

  redirectSignUp() {
    this.router.navigate(['auth/sign-up']);
  }
}
