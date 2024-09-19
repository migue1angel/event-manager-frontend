import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../../../models/auth/login.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  url = 'http://localhost:3000/auth/';

  constructor() {}

  googleRegister() {
    const url = `${this.url}google/login`;
    window.location.href = `${url}`;
  }

  login(credentials: LoginModel) {
    const url = `${this.url}login`;
    this.httpClient.post(url, credentials).subscribe((response: any) => {
      const route = sessionStorage.getItem('urlRedirect');
      this.authService.token = response.token;
      this.router.navigate([route]);
    });
  }
}
