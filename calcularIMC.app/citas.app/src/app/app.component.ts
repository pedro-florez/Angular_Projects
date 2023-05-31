import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    listaCitas: any[] = [];

    guardarCita( cita: any ): void {
        
        this.listaCitas.push( cita );  
    }
    
    eliminarCita( id: number ): void {

        this.listaCitas.splice( id, 1 );
    }
}
