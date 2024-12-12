import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly baseUrl = environment.baseApiUrl;
  constructor(private readonly httpClient: HttpClient) {}

  create(data: any): Observable<any> {
    const url = `${this.baseUrl}/event`;
    
    
    return this.httpClient.post(url, data).pipe(
        catchError(throwError)
    );
  }
}
