import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private readonly httpClient = inject(HttpClient);
  url = 'http://localhost:3000/users';


  create(payload: any): any {
    return this.httpClient.post(this.url, payload);
  }


}
