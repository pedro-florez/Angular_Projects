import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.component.html',
    styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

    imc:             number;
    clasificacion!:  string;
    interpretacion!: string;

    constructor( private route: ActivatedRoute ) {

        /** 
         * Obtener el Valor de Url route.snapshot.paramMap.get('valor')
         * Castear Tipo de dato de String a Number +variable
         * Error cuando puede venir null variable!
        */        
        this.imc = +route.snapshot.paramMap.get('valor')!;
    }

    // Metodo Que se Ejecuta al cargar el componente
    ngOnInit(): void {

        this.getResultado();
    }
    
    getResultado(): void {

        const imc = this.imc;        

        if ( imc < 18.5 ) {

            this.clasificacion  = 'Bajo peso';
            this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más.';
            
        } else if( imc >= 18.5 && imc < 25 ) {

            this.clasificacion  = 'Normal';
            this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';

        } else if( imc >= 25 && imc < 30 ) {

            this.clasificacion  = 'Sobrepeso';
            this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer ejercicio y comer saludable.';

        } else {

            this.clasificacion  = 'Obesidad';
            this.interpretacion = 'Tienes un peso corporal superior al sobrepeso. Dirígete al médico más cercano para que te revise, estás en peligro';          
        }
    }
}
