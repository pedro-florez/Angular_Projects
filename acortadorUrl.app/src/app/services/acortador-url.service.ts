import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AcortadorUrlService {

    /*
     * Las Partes Comentadas son Reemplazadas por el "Interceptor" 
    */
    endpoint: string = 'https://api-ssl.bitly.com/v4/shorten';
    //apiToken: string = '8e5b9c83863be861b5d33f37b4f844bf2033b52a';   

    constructor( private http: HttpClient ) { }

    getUrlCorta( nombreUrl: string ): Observable<any> {

        /* const tokenHeader = new HttpHeaders({
            Authorization: this.apiToken
        }); */
        
        const body = { long_url: nombreUrl };

        // Realizar Peticion POST
        return this.http.post(
            this.endpoint, 
            body/* ,
            { headers: tokenHeader } */
        );
    }
}
