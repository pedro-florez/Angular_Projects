import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular.app';

    // La interpolación y el property binding se utilizan para comunicar datos entre el archivo "TS" y el archivo HTML

    // Interpolación {{ nombre }}
    nombre = 'Pedro Florez';

    // Two Way Data Binding [(ngModel)]="nombre" Agregar FormsModule en imports -> app.module.ts

    // Property binding [atributoHTML]="textPleceholder"
    textPleceholder = 'Escribe tu mensaje';

    // Event Binding (click)="enviarMensaje()"
    activeAlert = 'display: none';
    
    enviarMensaje() : void  {

        this.activeAlert = 'display: block';
    }

    closeAlert() : void  {

        this.activeAlert = 'display: none';
    }

}
