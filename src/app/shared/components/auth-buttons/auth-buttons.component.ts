import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrl: './auth-buttons.component.scss',
})
export class AuthButtonsComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  redirectLogin() {
    // this.authService.saveUrlRedirect();
    this.router.navigate(['auth/login']);
  }

  redirectSignUp() {
    // this.authService.saveUrlRedirect();
    this.router.navigate(['auth/sign-up']);
  }
}
