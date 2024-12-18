import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TicketsHttpService {
  private readonly baseUrl = environment.baseApiUrl;
  private readonly httpClient = inject(HttpClient);

  generateTickets(orderId: string): Observable<any> {
    return this.httpClient.get(
      `${this.baseUrl}/orders/generate-tickets/${orderId}`,
      {
        responseType: 'blob',
      }
    );
  }

  constructor() {}
}
