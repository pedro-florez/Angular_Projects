import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

    listaTareas: Tarea[] = [];

    nombreTarea:string = '';

    agregarTarea(): void {

        if ( this.nombreTarea != '' ) {

            // Crear Tarea Opcion 1
            /* const tarea: Tarea = {
                nombre: this.nombreTarea,
                estado: false
            } */
            
            // Crear Tarea Opcion 2
            const tarea = new Tarea( this.nombreTarea );

            // Agregar tarea al listado de tareas
            this.listaTareas.push(tarea);

            console.log(this.listaTareas);

            // Limpiar el input agregar tarea
            this.nombreTarea = '';                      

        }else {

            alert('Por favor ingresa los datos solicitados.');
        }        
    }

    eliminarTarea(id: number): void {

        if ( confirm('¿Está seguro(a) de eliminar esta tarea?') ) {
            
            this.listaTareas.splice( id, 1 );   
        }        
    }

    cambiarEstadoTarea( id:number, estado:boolean ): void {

        this.listaTareas[id].estado = !estado;     
    }
    
}
