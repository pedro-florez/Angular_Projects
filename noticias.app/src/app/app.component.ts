import { Component } from '@angular/core';

import { NoticiaService } from './services/noticia.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    listaNoticias:   any[]   = [];
    loading:         boolean = false;
    showAlertError:  boolean = false;    

    constructor( private _noticiaService: NoticiaService ) {}

    buscarNoticia( parametos: object ) {

        this.listaNoticias  = [];
        this.showAlertError = false;        
        this.loading        = true;

        this._noticiaService
        .getNoticias( parametos )
        .subscribe({

            next: ( data ) => {

                this.listaNoticias= data.articles;
            },
            error: () => {
                this.loading        = false;
                this.showAlertError = true;
            },
            complete: () => {
                this.loading   = false;
            }
        });
    }       
}
