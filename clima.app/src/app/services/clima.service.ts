import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClimaService {

    dominio: string = 'https://api.openweathermap.org/data/2.5/weather?';
    apiKey:  string = '45960e8fdfeed73cf98015d28570f947';    

    constructor( private http: HttpClient ) { }

    getClimaCuidad( cuidad: string ): Observable<any> {

        const endpoint = `${this.dominio}q=${cuidad}&appid=${this.apiKey}`;

        // Realizar Peticion Get
        return this.http.get( endpoint );
    }
}
