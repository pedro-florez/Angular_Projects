import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs';

import { EmpleadoRule } from 'src/app/helpers/Rules';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
    selector: 'app-formulario-empleado',
    templateUrl: './formulario-empleado.component.html',
    styleUrls: ['./formulario-empleado.component.css']
})
export class FormularioEmpleadoComponent implements OnInit {

    form:        FormGroup;
    empleado_id: string | undefined;
    accion:      string  = 'Agregar';
    btnName:     string  = 'Guardar';
    mensaje:     string  = 'guardado';

    constructor(
        private formBuilder:      FormBuilder,
        private _empleadoService: EmpleadoService,
        private _snackBar:        MatSnackBar,
        private router:           Router,
        private aRoute:           ActivatedRoute
    ) {

        this.form = this.formBuilder.group( EmpleadoRule );

        // Obtener el Parametro de la URL
        this.empleado_id = this.aRoute.snapshot.params['empleado_id'];
    }

    ngOnInit(): void {

        // Obtener Empleado Para Editar
        if (this.empleado_id) {

            this.accion    = 'Editar';
            this.btnName   = 'Actualizar';
            const empleado = this._empleadoService.editEmpleado( Number(this.empleado_id) );

            // Validar que Exista el Empleado
            if ( empleado ) {
                
                let {
                    nombre,
                    apellidos,
                    email,
                    telefono
                } = empleado;
    
                // Setear los valores del Formulario
                this.form.patchValue({
                    nombre,
                    apellidos,
                    email,
                    telefono
                });
            }
        }      
    }

    guardarEmpleado() {

        // Validar el Estado del Formulario
        if ( this.form.status === 'INVALID' ) {
            return;
        }
        
        // Preparar Datos
        const empleado = {
            ...this.form.value,            
            fechaRegistro: new Date
        }
        
        if ( this.empleado_id ) {

            // Actualizar
            this._empleadoService.updateEmpleado( empleado, Number(this.empleado_id) );
            this.mensaje = 'actualizado';
            
        } else {

            // Guardar
            this._empleadoService.storeEmpleado( empleado );
        }        

        // Alert de Exito
        this._snackBar.open(
            `El empleado se ha ${this.mensaje} con éxito.`,
            '', 
            { duration: 3000 }
        );

        // Redireccionar al Inicio        
        this.router.navigate(['/']);
    }   

    isTouched( item: string ): boolean {
        // Validar si el usuario Toco el Input
        return this.form.get(item)?.touched || false;
    }

    showMessageError( item: string ) {
        
        // Mostrar mensaje de error
        if ( this.form.get(item)?.hasError('required') ) {
            return 'Campo requerido.';
        }

        if ( this.form.get(item)?.hasError('pattern') ) {
            return 'El formato del campo no es válido.';
        }

        return '';
    }

}
