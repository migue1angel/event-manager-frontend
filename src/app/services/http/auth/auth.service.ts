import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  login(){
    const url = `${this.url}/google/login`
    this.httpClient.get(url).subscribe(
      response => console.log(response) 
    )
  }
}
