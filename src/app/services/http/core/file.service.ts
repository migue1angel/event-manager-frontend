import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private httpClient = inject(HttpClient);
  private url = 'http://localhost:3000/core/';

  constructor() {}

  upload(formData:FormData):Observable<any>{
    return this.httpClient.post<FormData>(`${this.url}/organizer/register`, formData)
  }
}
