import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TarjetaRule } from 'src/app/rules/Tarjeta';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { capitalizeWord } from 'src/app/helpers/Utility';

@Component({
    selector: 'app-agregar-tarjeta',
    templateUrl: './agregar-tarjeta.component.html',
    styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {

    // Formulario Reactivo    
    form:         FormGroup;
    id:           string | undefined;
    fechaRegistro!: Date;
    titulo:       string  = 'Agregar';
    btnName:      string  = 'Guardar';
    loading:      boolean = false;

    constructor( 
        private formBuilder:     FormBuilder,
        private _tarjetaService: TarjetaService,
        private toastr:          ToastrService     
    ) {

        this.form = this.formBuilder.group( TarjetaRule );
    }

    ngOnInit(): void {

        // Obtener Tarjeta Para Editar
        this._tarjetaService
        .getTarjetaEdit()
        .subscribe( data => {

            this.id            = data.id;
            this.fechaRegistro = data.fechaRegistro;
            this.titulo        = 'Editar';
            this.btnName       = 'Actualizar';

            // Colocar Valores en el Formulario
            this.form.patchValue({
                titular:         data.titular,
                numeroTarjeta:   data.numeroTarjeta,
                fechaExpiracion: data.fechaExpiracion,
                cvv:             data.cvv
            });
        });
    }

    resetForm(): void {

        this.titulo  = 'Agregar';
        this.btnName = 'Guardar';

        // Limpiar el Formulario
        this.form.reset();
    }

    detenerSpinner(): void {
        this.loading = false;
    }

    guardarTarjeta(): void {

        // Validar Formulario
        if ( this.form.invalid ) {

            // Mostar Alerta de Error
            this.toastr.error('Debe ingresar los datos correctamente.', 'Error');
            return;
        }

        this.loading = true;

        // Obtener Datos del Formulario
        const { 
            titular,
            numeroTarjeta,
            fechaExpiracion,
            cvv 
        } = this.form.value;

        // Crear el Objeto Tarjeta
        const tarjeta: TarjetaCredito = {
            titular: capitalizeWord( titular ),
            numeroTarjeta,
            fechaExpiracion,
            cvv,
            fechaRegistro:      new Date(),
            fechaActualizacion: new Date()
        }

        // Crear Tarjeta
        if ( this.id === undefined ) {

            this.crearTarjeta( tarjeta );
            return;
        }        

        // Actualizar Tarjeta
        this.actualizarTarjeta( tarjeta );
    } 
    
    crearTarjeta( tarjeta: TarjetaCredito ): void {
        
        // Guardar el Objeto Tarjeta en FireBase
        this._tarjetaService
        .addTarjetaCredito( tarjeta )
        .then( () => {

            this.detenerSpinner();

            // Mostar Alerta de Exito
            this.toastr.success('La tarjeta se ha guardado con éxito.', '¡Buen trabajo!');

            // Limpiar el Formulario
            this.form.reset();
        })
        .catch( (err) => {

            this.detenerSpinner();

            // Mostar Alerta de Error
            this.toastr.error('Ops.. algo salió mal.', 'Error');
        });
    }

    actualizarTarjeta( tarjeta: TarjetaCredito ): void {

        // Setear la Fecha de Registro
        tarjeta.fechaRegistro = this.fechaRegistro;

        // Actualizar el Objeto Tarjeta en FireBase
        this._tarjetaService
        .updateTarjetaCredito( this.id, tarjeta )
        .then( () => {

            this.detenerSpinner();

            // Mostar Alerta de Exito
            this.toastr.success('La tarjeta se ha actualizado con éxito.', '¡Buen trabajo!');

            this.resetForm();
        })
        .catch( (err) => {

            this.detenerSpinner();

            // Mostar Alerta de Error
            this.toastr.error('Ops.. algo salió mal.', 'Error');
        });
    }
}
