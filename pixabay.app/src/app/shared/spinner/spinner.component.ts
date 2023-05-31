import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ImagenService } from 'src/app/services/imagen.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy {
    
    loading:      boolean = false;
    suscripcion:  Subscription;

    constructor( private _imagenService: ImagenService ) {

        this.suscripcion = this._imagenService
        .getSpinner()
        .subscribe( data => {
            this.loading = data;
        });
    }

    ngOnDestroy(): void {
        this.suscripcion.unsubscribe();
    }

}
