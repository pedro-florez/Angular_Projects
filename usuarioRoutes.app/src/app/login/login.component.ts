import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loading:       boolean = false;
    errorService:  boolean = false;

    constructor(
        private router: Router,
        private _usuarioService: UsuarioService 
    ) { }

    redirectToDashboard(): void {

        this.loading      = true;
        this.errorService = false;
        
        // Obtener Usuarios API
        this._usuarioService
        .getUsuarios()
        .subscribe({
            next: ( data ) => {

                if ( data.results.length ) {
                    
                    // LLenar el listado Global de Usuarios
                    this._usuarioService.listaUsuarios = data.results;

                    setTimeout(() => {                        
                        this.router.navigate(['/dashboard']);
                    }, 2000);
                }
            },
            error: () => {
                this.loading      = false;
                this.errorService = true;
            }
        }); 
    }
}
