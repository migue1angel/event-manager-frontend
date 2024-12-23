import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ServerResponseInterface } from '../../models/auth/server-response.interface';
import { EventInterface } from '../../models/core/event.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class EventsHttpService {
  private readonly baseUrl = environment.baseApiUrl;
  private readonly authService = inject(AuthService);
  private readonly httpClient = inject(HttpClient);
  constructor() {}

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

  findAllByOrganizer(): Observable<EventInterface[]>{
    return this.httpClient.get<EventInterface[]>(`${this.baseUrl}/events/organizer/${this.authService.currentUser!.id}`);
  }

  findById(id: string): Observable<EventInterface> {
    return this.httpClient
      .get<EventInterface>(`${this.baseUrl}/events/${id}`)
      .pipe(catchError(throwError));
  }
}
