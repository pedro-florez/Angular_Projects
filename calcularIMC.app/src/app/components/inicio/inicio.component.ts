import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    altura:       number = 150;
    edad:         number = 20;
    peso:         number = 70;
    generoActual: string = 'Masculino';
    generos:      any[] = [
        { nombre: 'Masculino', icon: 'fas fa-mars' },
        { nombre: 'Femenino',  icon: 'fas fa-venus' }
    ];

    // Declarar Var router
    constructor( private router: Router ) { }

    cambiarAltura( event: any ) {

        this.altura = event.target.value;
    }

    calcularIMC() {

        // Calcular IMC Math.pow( numero, elevar_al_cuadrado )
        const IMC = this.peso / Math.pow( this.altura / 100, 2 );

        // toFixed(decimales)
        // Enviar IMC al Componente Resultado
        this.router.navigate([ '/resultado', IMC.toFixed(1) ]);
    }

}
