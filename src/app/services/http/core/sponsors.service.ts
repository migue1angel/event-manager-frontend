import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";

class SoponsrsService {

  private readonly httpClient = inject(HttpClient);

  url = 'http://localhost:3000/sponsors';
  constructor() {}

}
