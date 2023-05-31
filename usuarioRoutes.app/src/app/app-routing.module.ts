import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaUsuariosComponent } from './dashboard/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './dashboard/detalle-usuario/detalle-usuario.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        children: [
            { path: '', component: ListaUsuariosComponent },
            { path: 'usuario/:id', component: DetalleUsuarioComponent }
        ] 
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }