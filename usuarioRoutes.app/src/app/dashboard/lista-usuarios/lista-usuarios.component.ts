import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-lista-usuarios',
    templateUrl: './lista-usuarios.component.html',
    styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit, OnDestroy {

    listaUsuarios: any[] = [];
    suscripcion!:  Subscription;

    constructor( 
        private router: Router,
        private _usuarioService: UsuarioService
    ) { }

    ngOnInit(): void {

        // Validar que Existan Usuarios
        if ( this._usuarioService.listaUsuarios.length === 0 ) {
            this.router.navigate(['/login']);
            return;     
        }
        
        this.listaUsuarios = this._usuarioService.listaUsuarios;
    }

    ngOnDestroy(): void {

        if ( typeof this.suscripcion != 'undefined' ) {
            this.suscripcion.unsubscribe();
        }
    }
}