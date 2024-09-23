import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerResponseInterface } from '../../../models/auth/server-response.model copy';
import { AuthResponseInterface } from '../../../models/auth/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private readonly httpClient = inject(HttpClient);
  url = 'http://localhost:3000/users';

  create(payload: any): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(this.url, payload);
  }
}
