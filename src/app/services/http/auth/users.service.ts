import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/users';
  private readonly httpClient = inject(HttpClient);
  create(payload: any): any {
    return this.httpClient.post(this.url, payload).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
}
