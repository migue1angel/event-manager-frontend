import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHttpService } from '../../../services/http/auth/auth-http.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-auth-success',
  template: ``,
})
export class AuthSuccessComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  ngOnInit(): void {
    this.route.params.subscribe(({ token }) => {
      this.authService.token = token;
      this.router.navigate([this.authService.urlRedirect]);
    });
  }
}
