import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
    selector: 'app-listar-cita',
    templateUrl: './listar-cita.component.html',
    styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent {

    @Input() listaCitas!: any[];
    @Output() prepareEliminarCita = new EventEmitter<number>();


    confirmarEliminarCita( id: number ): void {

        if ( confirm('¿Está seguro(a) de eliminar esta cita?') ) {
            
            this.prepareEliminarCita.emit( id );   
        }        
    }
}