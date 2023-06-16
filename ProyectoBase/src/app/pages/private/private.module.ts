import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { IndexComponent } from './roles/index/index.component';

@NgModule({
    declarations: [
        InicioComponent,
        UsuariosComponent,
        RolesComponent,
        IndexComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PrivateModule { }