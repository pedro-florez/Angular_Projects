import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-detalle-usuario',
    templateUrl: './detalle-usuario.component.html',
    styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit, OnDestroy {

    id:        string;
    nombre!:   string;
    email!:    string;
    imagen!:   string;
    edad!:     string;
    celular!:  string;
    telefono!: string;
    ciudad!:   string;
    pais!:     string;
    fechaReg!: Date;
    suscripcion!:  Subscription;

    constructor( 
        private router: Router,
        private aRoute: ActivatedRoute,
        private _usuarioService: UsuarioService
    ) {
        this.id = this.aRoute.snapshot.paramMap.get('id') || '';
    }

    ngOnInit(): void {

        // Validar que Existan Usuarios
        if ( this._usuarioService.listaUsuarios.length === 0 ) {
            this.router.navigate(['/login']);
            return;   
        }

        let { 
            name,
            email,
            picture,
            dob,
            cell,
            phone,
            location,
            registered
        } = this._usuarioService.getUsuario( this.id );

        this.nombre   = `${name.first} ${name.last}`;
        this.email    = email;
        this.imagen   = picture.large;
        this.edad     = dob.age;
        this.celular  = cell;
        this.telefono = phone;
        this.ciudad   = location.city;
        this.pais     = location.country;
        this.fechaReg = registered.date;
    }

    ngOnDestroy(): void {

        if ( typeof this.suscripcion != 'undefined' ) {
            this.suscripcion.unsubscribe();
        }
    }
}
