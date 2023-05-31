import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { generarEndpoint } from '../helpers/Utility';

@Injectable({
    providedIn: 'root'
})
export class ImagenService {
    
    private busqueda$       = new Subject<string>();
    private alertData$      = new Subject<any>();
    private spinner$        = new Subject<boolean>();   

    constructor( private http: HttpClient ) { }

    getImagenes( data: any ): Observable<any> {

        return this.http.get(
            generarEndpoint( data )
        );
    }    

    setBusqueda( nombreImg: string ) {
        this.busqueda$.next( nombreImg );
    }

    getBusqueda(): Observable<string> {
        return this.busqueda$.asObservable();
    }

    setAlertData( data: any ) {
        this.alertData$.next( data );
    }

    getAlertData(): Observable<any> {
        return this.alertData$.asObservable();
    }

    setSpinner( value: boolean ) {
        this.spinner$.next( value );
    }

    getSpinner(): Observable<boolean> {
        return this.spinner$.asObservable();
    }    
}