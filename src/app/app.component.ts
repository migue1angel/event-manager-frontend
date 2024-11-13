import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './shared/enums/auth-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'event-manager-frontend';
  // private readonly authService = inject(AuthService);
  // private readonly router = inject(Router);
  // ngOnInit(): void {
  //   this.authService.validateToken().subscribe(() => {
  //     this.redirect();
  //   });
  // }

  // redirect() {
  //   if (this.authService.authStatus === AuthStatus.checking) return;
  //   if (this.authService.authStatus === AuthStatus.unauthenticated) {
  //     this.router.navigate(['auth/login']);
  //   } else {
  //     return
  //   }
  // }
}
