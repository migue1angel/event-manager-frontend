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
    const { images, ...event } = data;
    const formData = new FormData();

    formData.append('event', JSON.stringify(event));
    images.map((image: any) => {
      console.log('image', image);

      formData.append('images', image);
    });

    return this.httpClient.post(url, formData).pipe(catchError(throwError));
  }
}
