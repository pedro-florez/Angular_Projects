import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    listaUsuarios: any[]  = [];

    private host          = 'https://randomuser.me/';
    private requesting    = 'api/1.4/?results=18';
    private excluding     = '&exc=gender';
    private nationalities = '&nat=es,mx';

    constructor( private http: HttpClient ) { }

    getUsuarios(): Observable<any> {
        
        const endpoint = `${this.host}${this.requesting}${this.excluding}${this.nationalities}`;
 
        return this.http.get( endpoint );
    }

    getUsuario( id: string ): any {
        
        return this.listaUsuarios.filter(
            (usuario) => usuario.login.uuid === id,
        )[0] || {};
    }
}
