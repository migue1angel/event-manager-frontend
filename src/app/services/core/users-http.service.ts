import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseInterface } from '../../models/auth/auth-response.model';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private readonly httpClient = inject(HttpClient);
  url = 'http://localhost:3000/users';

  // todo: cambiar el tipo de respuesto y uso del método
  create(payload: any): Observable<AuthResponseInterface> {
    return this.httpClient.post<AuthResponseInterface>(this.url, payload);
  }
}
