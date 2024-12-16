import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ServerResponseInterface } from '../../models/auth/server-response.interface';
import { EventInterface } from '../../models/core/event.interface';

@Injectable({ providedIn: 'root' })
export class EventsHttpService {
  private readonly baseUrl = environment.baseApiUrl;
  constructor(private readonly httpClient: HttpClient) {}

  create(data: any): Observable<any> {
    const url = `${this.baseUrl}/events`;
    const { images, ...event } = data;
    const formData = new FormData();

    formData.append('event', JSON.stringify(event));
    images.map((image: any) => {
      console.log('image', image);

      formData.append('images', image);
    });

    return this.httpClient.post(url, formData).pipe(catchError(throwError));
  }

  findAll(): Observable<EventInterface[]> {
    return this.httpClient.get<EventInterface[]>(`${this.baseUrl}/events`);
  }

  findById(id: string): Observable<EventInterface> {
    return this.httpClient
      .get<EventInterface>(`${this.baseUrl}/events/${id}`)
      .pipe(catchError(throwError));
  }
}
