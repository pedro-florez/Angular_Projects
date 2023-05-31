import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';
import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';

const routes: Routes = [
    { 
        path: '', 
        component: ListaEmpleadoComponent 
    },
    { 
        path: 'agregar',
        component: FormularioEmpleadoComponent 
    },
    { 
        path: 'editar/:empleado_id',
        component: FormularioEmpleadoComponent 
    },
    {   
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }