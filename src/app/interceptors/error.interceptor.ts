import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export function errorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(

    catchError((err: HttpErrorResponse) => {
      let errorMessage: string = '';

      if (err.error instanceof ErrorEvent) {
        errorMessage = `${err.error.message}`;
      } else if (err.status >= 500) {
        errorMessage = `Internal server error\nInténtelo mas tarde`;
      } else if (err.statusText === 'Unknown Error') {
        errorMessage = `Inténtelo mas tarde`;
      } else {
        errorMessage = `${err.error.message}`;
      }

      return throwError(() => errorMessage);
    })
  );
}
