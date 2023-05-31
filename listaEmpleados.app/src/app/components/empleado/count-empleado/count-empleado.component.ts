import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
    selector: 'app-count-empleado',
    templateUrl: './count-empleado.component.html',
    styleUrls: ['./count-empleado.component.css']
})
export class CountEmpleadoComponent {

    // Variable de Entrada
    @Input()  listaEmpleados!: Empleado[];

    // Variable de Salida
    @Output() getRadioBtnSelect = new EventEmitter<string>();

    radioBtnSelect: string = 'Todos';

    dataChecks: any[] = [
        { id: 'todosRadio',     nombre: 'Todos' },
        { id: 'masculinoRadio', nombre: 'Masculino' },
        { id: 'femeninoRadio',  nombre: 'Femenino' }
    ];

    // Metodo Para la Salida
    radioChange(): void {
        this.getRadioBtnSelect.emit( this.radioBtnSelect );
    }

    getGeneros( valor: string ): number {

        if ( valor === 'Todos' ) {

            return this.listaEmpleados.length;
        }

        return this.listaEmpleados.filter(
            empleado => empleado.genero === valor
        ).length;
    }    

}
