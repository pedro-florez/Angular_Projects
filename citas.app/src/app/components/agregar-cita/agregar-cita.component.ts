import { Component, EventEmitter, Output } from '@angular/core';
import { isEmpty } from 'src/app/helpers/validaciones';

@Component({
    selector: 'app-agregar-cita',
    templateUrl: './agregar-cita.component.html',
    styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent {

    nombre!:   string;
    fecha!:    string;
    hora!:     string;
    sintomas!: string;   
    formError: boolean = false;

    @Output() prepareAgregarCita = new EventEmitter<any>();
    
    validarFormulario(): void {

        if (isEmpty(this.nombre) ||
            isEmpty(this.fecha)  ||
            isEmpty(this.hora)   ||
            isEmpty(this.sintomas)
        ) {            
            this.formError = true;
        } else {
            this.formError = false;
        }
    }

    agregarCita(): void {

        // Validar Formulario
        this.validarFormulario();
        
        if ( !this.formError ) {

            // Crea Objeto Cita
            const objCita = {
                nombre:   this.nombre,
                fecha:    this.fecha,
                hora:     this.hora,
                sintomas: this.sintomas
            }

            // Guardar cita
            this.prepareAgregarCita.emit( objCita );

            // Limpiar Campos
            this.resetCampos();
        }
    }

    resetCampos(): void {
        this.nombre   = '';
        this.fecha    = '';
        this.hora     = '';
        this.sintomas = '';
    }
}