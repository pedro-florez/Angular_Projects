import { Component } from '@angular/core';

@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.component.html',
    styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

    listaEstudiantes: any[] = [
        {
            nombre: "Argelia Paternina",
            edad: 56,
            estado: "Activo"
        },
        {
            nombre: "Juan Gonzales",
            edad: 25,
            estado: "Inactivo"
        },
        {
            nombre: "Maria Feliz",
            edad: 20,
            estado: "Activo"
        },
        {
            nombre: "Victor Perez",
            edad: 18,
            estado: "Inactivo"
        },
        {
            nombre: "Juliana Lopez",
            edad: 36,
            estado: "Activo"
        }
    ];

    activeTable:boolean = true;

    showTable(): void {
        this.activeTable = !this.activeTable;
    };    
}
