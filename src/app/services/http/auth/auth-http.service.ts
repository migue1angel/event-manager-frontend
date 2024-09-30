import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginModel } from '../../../models/auth/login.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { ServerResponseInterface } from '../../../models/auth/server-response.model copy';
import { AuthResponseInterface } from '../../../models/auth/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private readonly httpClient = inject(HttpClient);
  url = 'http://localhost:3000/auth/';

  constructor() {}

  googleLogin() {
    const url = `${this.url}google/login`;
    window.location.href = `${url}`;
  }

  login(credentials: LoginModel): Observable<AuthResponseInterface> {
    const url = `${this.url}login`;
    return this.httpClient.post<AuthResponseInterface>(url, credentials);
  }
}
