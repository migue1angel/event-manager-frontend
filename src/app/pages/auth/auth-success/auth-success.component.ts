import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { tap } from 'rxjs';

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
      this.authService.validateToken().subscribe();
      this.router.navigate([this.authService.urlRedirect]);
    });
  }
}
