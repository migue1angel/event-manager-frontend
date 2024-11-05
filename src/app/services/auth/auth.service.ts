import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthResponseInterface } from '../../models/auth/auth-response.model';
import { LoginModel } from '../../models/auth/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router);
  private readonly httpClient = inject(HttpClient);
  url = 'http://localhost:3000/auth';

  saveUrlRedirect() {
    sessionStorage.setItem('urlRedirect', this.router.url);
  }
  get urlRedirect() {
    return sessionStorage.getItem('urlRedirect') ?? '/';
  }

  set token(value: string) {
    sessionStorage.setItem('token', value);
  }

  get token(): string | null {
    return sessionStorage.getItem('token');
  }
  googleLogin() {
    const url = `${this.url}/google/login`;
    window.location.href = `${url}`;
  }

  // todo:Guardar el usuario que inicio sesión y el estado de la sesión
  login(credentials: LoginModel): Observable<AuthResponseInterface> {
    const url = `${this.url}/login`;
    return this.httpClient.post<AuthResponseInterface>(url, credentials).pipe(
      tap((response) => (this.token = response.token))
    );
  }
  register(payload: any): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(this.url, payload);
  }
}
