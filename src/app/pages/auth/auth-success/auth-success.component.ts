import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHttpService } from '../../../services/http/auth/auth-http.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-auth-success',
  template:'',
})
export class AuthSuccessComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  token = this.route.snapshot.params['token'];
  ngOnInit(): void {
    const route = sessionStorage.getItem('urlRedirect');
    this.authService.token = this.token
    this.router.navigate([route]);
  }

}
