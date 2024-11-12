import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { AuthResponseInterface } from '../../models/auth/auth-response.model';
import { LoginModel } from '../../models/auth/login.model';
import { UserInterface } from '../../models/auth/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser?: UserInterface;
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
      tap((response) => (this.token = response.token)),
      tap((response) => (this.currentUser = response.user)),
      catchError(() => throwError(() => 'Invalid credentials'))
    );
  }

  register(payload: any): Observable<AuthResponseInterface> {
    const url = `${this.url}/register`;
    return this.httpClient.post<AuthResponseInterface>(url, payload);
  }

  validateToken(): Observable<boolean> {
    const url = `${this.url}/validate-token`;
    return this.httpClient.get<AuthResponseInterface>(url).pipe(
      tap((response) => (this.token = response.token)),
      tap((response) => (this.currentUser = response.user)),
      map(() => true),
      catchError(() => of(false))
    );
  }
}
