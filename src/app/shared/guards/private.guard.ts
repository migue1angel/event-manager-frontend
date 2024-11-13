import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AuthStatus } from '../enums/auth-status.enum';

export const privateGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  authService.validateToken().subscribe();

  if (authService.authStatus === AuthStatus.unauthenticated) {
    authService.saveUrlRedirect(state.url);
    router.navigate(['auth/login']);
    return false;
  }
  
  sessionStorage.removeItem('urlRedirect');
  return true;
};
