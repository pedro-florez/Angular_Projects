import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    temperatura!:   number;
    humedad!:       number;
    clima!:         string;
    ciudad:         string = '';
    ciudadObtenida: string = '';
    loading:        boolean = false;
    resultado:      boolean = false;
    showAlertError: boolean = false;

    constructor( private _climaService: ClimaService ) {}

    obtenerClima(): void {

        this.resultado      = false;
        this.showAlertError = false;
        this.loading        = true;

        // Suscripcion a la variable _climaService
        this._climaService
        .getClimaCuidad( this.ciudad )
        .subscribe({
            next: ( data ) => {          

                this.ciudadObtenida = this.ciudad;

                this.temperatura = data.main.temp - 273;
                this.humedad     = data.main.humidity;
                this.clima       = data.weather[0].main;
            },
            error: () => {

                this.handleError();
            },
            complete: () => {

                this.loading   = false;
                this.resultado = true;
            }
        });
    }

    handleError(): void {

        this.loading        = false;
        this.showAlertError = true;

        setTimeout(() => {

            this.showAlertError = false;
            this.ciudad = '';
            
        }, 3000);
    }
}
