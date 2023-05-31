import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { generarEndpoint } from '../helpers/Utilitys';

@Injectable({
    providedIn: 'root'
})
export class NoticiaService {

    constructor( private http: HttpClient ) { }

    getNoticias( { categoria, pais }: any ): Observable<any> {

        return this.http.get(
            generarEndpoint( categoria, pais )
        );
    }

}
