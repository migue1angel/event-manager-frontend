import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router);
  saveUrlRedirect() {
    sessionStorage.setItem('urlRedirect', this.router.url);
  }
  set token(value: string) {
    sessionStorage.setItem('token', value);
  }

  get token(): string | null {
    return sessionStorage.getItem('token');
  }
}
