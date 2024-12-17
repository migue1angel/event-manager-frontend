import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of } from "rxjs";
import { CatalogueInterface } from "../../models/core/catalogue.interface";

@Injectable({
    providedIn: 'root'
})

export class CataloguesHttpService {

    private readonly baseUrl = environment.baseApiUrl;
    private readonly httpClient = inject(HttpClient);

    constructor(){}

    findAll(): Observable<CatalogueInterface[]>{

        return this.httpClient.get<CatalogueInterface[]>(`${this.baseUrl}/catalogues`)
    }
}