import { Component, EventEmitter, Output } from '@angular/core';

import { CATEGORIAS, PAISES } from 'src/app/helpers/Utilitys';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    @Output() parametrosSeleccionados = new EventEmitter<any>();

    selectCategoria: string = 'general';   
    selectPais:      string = 'co';    
    categorias:      any[]  = CATEGORIAS;
    paises:          any[]  = PAISES;

    enviarParametros(): void {

        this.parametrosSeleccionados.emit({
            categoria: this.selectCategoria,
            pais:      this.selectPais
        });
    }

}
