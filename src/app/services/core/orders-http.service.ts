import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { EventInterface } from "../../models/core/event.interface";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class OrderHttpService{
    private readonly baseUrl = environment.baseApiUrl;
    private readonly authService = inject(AuthService);
    private readonly httpClient = inject(HttpClient);

    findByUser():Observable<any[]>{
        return this.httpClient.get<any[]>(`${this.baseUrl}/orders/user/${this.authService.currentUser?.id}`)
    }
    
    constructor() {}
}