import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/private/inicio/inicio.component';
import { UsuariosComponent } from './pages/private/usuarios/usuarios.component';
import { RolesComponent } from './pages/private/roles/roles.component';
import { LoginComponent } from './pages/public/login/login.component';

const routesApp: Routes = [
    { path: '', component: InicioComponent },
    { 
        path: 'inicio', 
        component: InicioComponent, 
        title: 'Inicio Home'
    },
    { path: 'roles', component: RolesComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'ingresar', component: LoginComponent  },
    { path: '**', redirectTo: 'ingresar' }
];

@NgModule({
    imports: [RouterModule.forRoot( routesApp )],
    exports: [RouterModule]
})
export class AppRoutingModule { }