import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ImagenService } from 'src/app/services/imagen.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnDestroy {

    mensaje:      string = '';
    alertColor:   string = 'alert-danger';
    mostrarAlert: boolean = false;
    suscripcion:  Subscription;

    constructor( private _imagenService: ImagenService  ) {

        this.suscripcion = this._imagenService
        .getAlertData()
        .subscribe( data => {
            this.mensaje      = data.mensaje      || '';
            this.alertColor   = data.alertColor   || 'alert-danger';
            this.mostrarAlert = data.mostrarAlert;
        });
    }

    ngOnDestroy(): void {
        this.suscripcion.unsubscribe();
    }
}
