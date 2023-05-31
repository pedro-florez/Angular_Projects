import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-mensaje-confirmacion',
    templateUrl: './mensaje-confirmacion.component.html',
    styleUrls: ['./mensaje-confirmacion.component.css']
})
export class MensajeConfirmacionComponent {

    constructor(
        public dialogRef: MatDialogRef<MensajeConfirmacionComponent>,

        // Obtener Data del metodo "eliminarEmpleado" del componente "ListaEmpleadoComponent"
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    cancelar(): void {
        this.dialogRef.close();
    }
}
