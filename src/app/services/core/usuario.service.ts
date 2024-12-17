import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

export interface EventoInterface {
  id: number;
  name: string;
  description: string;
  startDate: string;
  category: {
    name: string;
  };
  images: {
    url: string;
  }[];
  tipo?: 'creado' | 'registrado';  // Nueva propiedad
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl = environment.baseApiUrl;

  constructor(private readonly httpClient: HttpClient) {}

  create(data: any): Observable<any> {
    const url = `${this.baseUrl}/eventos`;
    const { images, ...evento } = data;
    const formData = new FormData();

    formData.append('evento', JSON.stringify(evento));
    images.forEach((image: any) => {
      formData.append('images', image);
    });

    return this.httpClient.post(url, formData).pipe(catchError(throwError));
  }

  findAll(): Observable<EventoInterface[]> {
    return this.httpClient.get<EventoInterface[]>(`${this.baseUrl}/eventos`).pipe(
      catchError(error => {
        console.error('Error fetching eventos:', error);
        return throwError(() => new Error('Error fetching eventos. Please try again later.'));
      })
    );
  }

  findById(id: string): Observable<EventoInterface> {
    return this.httpClient.get<EventoInterface>(`${this.baseUrl}/eventos/${id}`)
      .pipe(catchError(throwError));
  }
}
