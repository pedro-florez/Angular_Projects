import { Component } from '@angular/core';

import { ImagenService } from 'src/app/services/imagen.service';

@Component({
    selector: 'app-buscar-imagen',
    templateUrl: './buscar-imagen.component.html',
    styleUrls: ['./buscar-imagen.component.css']
})
export class BuscarImagenComponent {

    nombreImg: string = '';

    constructor( private _imagenService: ImagenService ) {}

    buscarImagenes(): void {        

        this._imagenService.setBusqueda( this.nombreImg );
    }
}
