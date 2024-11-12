import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let headers = req.headers ? req.headers : new HttpHeaders();
  if (authService.token) {
    headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${authService.token}`
    );
  }
  const newReq = req.clone({ headers });
  return next(newReq);
};
