import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
    selector: 'app-listar-tarjeta',
    templateUrl: './listar-tarjeta.component.html',
    styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

    listaTarjetas: TarjetaCredito[] = [];
    spinner: boolean = false;

    constructor( 
        private _tarjetaService: TarjetaService,
        private toastr:          ToastrService
    ) {}

    ngOnInit(): void {
        this.obtenerTarjetas();
    }

    formatoFechaExp( texto: string ): string {
        return texto.slice(0,2) + '/' + texto.slice(2);
    }
    
    obtenerTarjetas() {

        this.spinner = true;

        this._tarjetaService
        .getAllTarjetas()
        .subscribe({
            next: ( data ) => {

                this.spinner       = false;
                this.listaTarjetas = data;
            },
            error: () => {                
                this.spinner = false;
            }
        });        
    }

    editarTarjeta( tarjeta: TarjetaCredito ) {
    
        this._tarjetaService.setTarjetaEdit( tarjeta );
    }
    
    eliminarTarjeta( id: any ) {

        Swal.fire({
            title: '¿Está seguro(a) de eliminar este registro?',
            text: '¡Si no lo está puede cancelar la acción!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#007bff',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then(( result ) => {

            if ( result.isConfirmed ) {

                // Swal Loading
                Swal.fire({
                    title: 'Eliminando...',
                    text: 'Espere por favor',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                    willOpen: () => {
                        Swal.showLoading();
                    }
                });

                // Eliminar Tarjeta de FireBase
                this._tarjetaService
                .deleteTarjetaCredito( id )
                .then( () => {

                    // Cerrar Swal Loading
                    Swal.close();

                    // Mostar Alerta de Exito
                    this.toastr.success(
                        'La tarjeta se ha eliminado con éxito.', 
                        '¡Buen trabajo!'
                    );
                })
                .catch( (err) => {

                    // Mostar Alerta de Error
                    this.toastr.error('Ops.. algo salió mal.', 'Error');     
                });
            }
        });                
    }    
}