import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly httpClient = inject(HttpClient);


  url = 'http://localhost:3000/auth';

  constructor() { }

  googleRegister(){
    const url = `${this.url}/google/login`
    window.location.href = url;

  }
}
