import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/Empleado';
import { ColumnsEmpleado } from 'src/app/helpers/Utility';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@Component({
    selector: 'app-lista-empleado',
    templateUrl: './lista-empleado.component.html',
    styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements AfterViewInit {

    listaEmpleado!: Empleado[];

    displayedColumns: string[] = ColumnsEmpleado;

    dataSource = new MatTableDataSource<Empleado>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort)      sort!:      MatSort;
    
    constructor( 
        private _empleadoService: EmpleadoService,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar
    ) { }

    ngAfterViewInit() {

        // Obtener Empleados
        this.listaEmpleado = this._empleadoService.getEmpleados();

        this.loadListEmpleados( this.listaEmpleado );
    }

    loadListEmpleados( listaEmpleado: Empleado[] ) {
        this.dataSource = new MatTableDataSource( listaEmpleado );
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort      = this.sort;
    }

    applyFilter( event: Event ) {
        const filterValue = ( event.target as HTMLInputElement ).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    eliminarEmpleado( id: number ) {

        // Enviar Datos al Componente "MensajeConfirmacionComponent"
        const dialogRef = this.dialog.open(
            MensajeConfirmacionComponent, {
            data: {
                mensaje: '¿Está seguro(a) de eliminar este empleado?'
            },
        });

        // Confirmar Eliminación al Cerrar el Modal Alert
        dialogRef.afterClosed().subscribe( result => {

            if ( result ) {
                
                // Elimnar Empleado
                this.listaEmpleado.splice( id, 1 );

                // Cargar Datos de la Tabla
                this.loadListEmpleados( this.listaEmpleado );

                // Alert de Exito
                this._snackBar.open(
                    'El empleado se ha eliminado con éxito.', 
                    '', 
                    { duration: 3000 }
                );
            }            
        });
    }    
}