import { Component } from '@angular/core';
import { EmpleadoJSON } from 'src/app/helpers/Utility';
import { Empleado } from 'src/app/models/Empleado';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

    radioBtnSelect: string = 'Todos';    

    listaEmpleados: Empleado[] = EmpleadoJSON;

    // Metodo Para Resivir Parametro del Hijo    
    recibirRadioBtnSelect( valor: string ): void {
        
        this.radioBtnSelect = valor;
    }
}
