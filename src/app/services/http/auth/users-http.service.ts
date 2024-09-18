import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  url = 'http://localhost:3000/users';

  create(payload: any): any {
    return this.httpClient
      .post(this.url, payload)
      .subscribe((response: any) => {
        const route = sessionStorage.getItem('urlRedirect');
        this.authService.token = response.token;
        this.router.navigate([route]);
      });
  }
}
