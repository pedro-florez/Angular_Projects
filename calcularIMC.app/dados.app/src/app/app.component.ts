import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    // Inicialización Opcional (!)
    //numero1!: number;
    numero1: number = 1;
    numero2: number = 3;

    dadoIzquierdo: string = this.urlImagen(this.numero1);
    dadoDerecho:   string = this.urlImagen(this.numero2);

    numerosAleatoreos(): number {

        let min = 1;
        let max = 6;

        return Math.floor(
            Math.random() * (max - min + 1) + min
        );
    }

    urlImagen( numero: number ): string {

        return `../assets/img/dice${numero}.png`; 
    }

    tirarDados(): void {

        this.numero1 = this.numerosAleatoreos();
        this.numero2 = this.numerosAleatoreos();

        this.dadoIzquierdo = this.urlImagen(this.numero1);
        this.dadoDerecho   = this.urlImagen(this.numero2);
    }
}
