import { Component } from '@angular/core';
import { AcortadorUrlService } from 'src/app/services/acortador-url.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    nombreUrl:       string  = '';
    urlCorta:        string  = '';    
    resultado:       boolean = false;
    loading:         boolean = false;
    showAlertError:  boolean = false;
    mensajeError:    string  = '';

    constructor( private _acortadorUrlService: AcortadorUrlService ) {}    

    generarUrlCorta(): void {

        this.showAlertError = false;

        // Validar Campo
        if ( this.nombreUrl == '' ) {

            this.handleError('Campo obligatorio.');
            return;
        }

        // Realizar Petición
        this.resultado = false;
        this.loading   = true;

        this._acortadorUrlService
        .getUrlCorta( this.nombreUrl )
        .subscribe({
            next: ( data ) => {

                this.urlCorta = data.link;
            },
            error: ( err ) => {

                this.loading = false;

                if ( err.error.description == 'The value provided is invalid.' ) {
                    
                    this.handleError('La URL es inválida.');
                }
            },
            complete: () => {
                this.loading   = false;
                this.resultado = true;
            }
        }); 
    }

    handleError( message: string ): void {
                
        this.showAlertError = true;
        this.mensajeError   = message;       
    }
}
