import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ImagenService } from 'src/app/services/imagen.service';

@Component({
    selector: 'app-listar-imagen',
    templateUrl: './listar-imagen.component.html',
    styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnDestroy {

    listaImagenes:     any[]    = [];
    termino:           string   = '';
    showPagination:    boolean  = false;
    imagenesPorPagina: number   = 20;
    paginaActual:      number   = 1;
    totalPaginas:      number   = 0;
    suscripcion:   Subscription;  

    constructor( private _imagenService: ImagenService  ) {

        this.suscripcion = this._imagenService
        .getBusqueda()
        .subscribe( data => {

            this.termino = data;

            this.obtenerImagenes({
                termino: this.termino
            });
        });        
    }    

    ngOnDestroy(): void {
        this.suscripcion.unsubscribe();
    }

    obtenerImagenes( parametros: any ): void {

        this.listaImagenes  = [];
        this.showPagination = false;

        if ( this.termino === '' ) {

            this._imagenService.setAlertData({
                mensaje: 'Campo obligatorio.',
                mostrarAlert: true
            });
            return;
        }

        this._imagenService.setAlertData({
            mostrarAlert: false
        });
        
        this._imagenService.setSpinner( true );

        this._imagenService
        .getImagenes( parametros )
        .subscribe({

            next: ( data ) => {

                if ( data.hits.length === 0 ) {

                    this._imagenService.setAlertData({
                        mensaje: 'Opss... no se encontraron resultados.',
                        alertColor: 'alert-info',
                        mostrarAlert: true
                    });
                    return;
                }

                this.listaImagenes = data.hits;

                this.totalPaginas = Math.ceil(
                    data.totalHits / this.imagenesPorPagina
                );

                this.showPagination = this.totalPaginas > 1;                
            },
            error: () => {

                this._imagenService.setSpinner( false );

                this._imagenService.setAlertData({
                    mensaje: 'Error algo salió mal, por favor comuníquese con el administrador.',
                    mostrarAlert: true
                });
            },
            complete: () => {
                this._imagenService.setSpinner( false );
            }
        });
    }

    paginaAnterior(): void {

        if ( this.paginaActual > 1 ) {
            
            this.paginaActual--;

            this.obtenerImagenes({
                termino:           this.termino,
                imagenesPorPagina: this.imagenesPorPagina, 
                paginaActual:      this.paginaActual
            });            
        }
    }

    paginaSiguiente(): void {

        if ( this.paginaActual < this.totalPaginas ) {

            this.paginaActual++;

            this.obtenerImagenes({
                termino:           this.termino,
                imagenesPorPagina: this.imagenesPorPagina, 
                paginaActual:      this.paginaActual
            });
        }
    }
}
