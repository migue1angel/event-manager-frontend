import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AuthResponseInterface } from '../../models/auth/auth-response.interface';
import { LoginModel } from '../../models/auth/login.model';
import { UserInterface } from '../../models/auth/user.interface';
import { AuthStatus } from '../../shared/enums/auth-status.enum';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser?: UserInterface;
  private _authStatus: AuthStatus = AuthStatus.checking;
  private readonly httpClient = inject(HttpClient);
  private readonly router = inject(Router);
  url = `${environment.baseApiUrl}/auth`;

  saveUrlRedirect(url: string) {
    sessionStorage.setItem('urlRedirect', url);
  }

  get urlRedirect() {
    return sessionStorage.getItem('urlRedirect') ?? '/';
  }

  get authStatus(): AuthStatus {
    return this._authStatus;
  }

  get currentUser(): UserInterface | undefined {
    return this._currentUser;
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

  login(credentials: LoginModel): Observable<AuthResponseInterface> {
    const url = `${this.url}/login`;

    return this.httpClient.post<AuthResponseInterface>(url, credentials).pipe(
      tap((response) => this.setAuthentication(response)),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  register(payload: any): Observable<AuthResponseInterface> {
    const url = `${this.url}/register`;
    return this.httpClient.post<AuthResponseInterface>(url, payload).pipe(
      tap((response) => this.setAuthentication(response)),
      catchError(() => throwError(() => 'Invalid request'))
    );
  }

  validateToken(): Observable<boolean> {
    const url = `${this.url}/validate-token`;
    if (!this.token) {
      this._authStatus = AuthStatus.unauthenticated;
      this._currentUser = undefined;
      return of(false);
    }

    // interceptor se encarga de enviar el token en la header
    return this.httpClient.get<AuthResponseInterface>(url).pipe(
      tap((response) => this.setAuthentication(response)),
      map(() => true),
      catchError(() => {
        this.logout();
        return of(false);
      })
    );
  }

  private setAuthentication(response: AuthResponseInterface) {
    this.token = response.token;
    this._currentUser = response.user;
    this._authStatus = AuthStatus.authenticated;
  }

  logout() {
    sessionStorage.removeItem('token');
    this._currentUser = undefined;
    this._authStatus = AuthStatus.unauthenticated;
    this.router.navigateByUrl('/');
  }
}
