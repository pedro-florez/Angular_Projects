import { Injectable } from '@angular/core';

import { Empleado } from '../models/Empleado';
import { ListaEmpleadosDB } from '../helpers/Utility';

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {

    listaEmpleado: Empleado[] = ListaEmpleadosDB;

    constructor() { }

    getEmpleados() {
        // slice() Return una Copia de la listaEmpleado
        return this.listaEmpleado.slice();
    }

    storeEmpleado( empleado: Empleado ) {
        this.listaEmpleado.unshift( empleado );
    }

    editEmpleado( empleado_id: number ) : Empleado {

        return this.listaEmpleado[ empleado_id ];
    }

    updateEmpleado( empleado: Empleado, empleado_id: number ) {

        // Actualizar Empleado
        this.listaEmpleado[ empleado_id ].nombre    = empleado.nombre;
        this.listaEmpleado[ empleado_id ].apellidos = empleado.apellidos;
        this.listaEmpleado[ empleado_id ].email     = empleado.email;
        this.listaEmpleado[ empleado_id ].telefono  = empleado.telefono;
    }    

}
