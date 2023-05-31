import { Injectable } from '@angular/core';
import { 
    addDoc, 
    collectionData, 
    deleteDoc, 
    doc, 
    Firestore,
    updateDoc
} from '@angular/fire/firestore';
import { collection, orderBy, query } from '@firebase/firestore';
import { Observable, Subject } from 'rxjs';

import { TarjetaCredito } from '../models/TarjetaCredito';

@Injectable({
    providedIn: 'root'
})
export class TarjetaService {

    private tarjeta$ = new Subject<TarjetaCredito>();

    constructor( private firestore: Firestore ) {}

    addTarjetaCredito( tarjeta: TarjetaCredito ): Promise<any> {        

        return addDoc( collection(this.firestore, 'Tarjetas'), tarjeta );
    }

    getAllTarjetas(): Observable<TarjetaCredito[]> {

        // collection( db, tabla)
        let tarjetaRef = collection(this.firestore, 'Tarjetas');

        // Ordenar Registros por fecha de Registro
        let queryTarjetas = query(
            tarjetaRef, 
            orderBy('fechaRegistro', 'desc') 
        );

        // collectionData(query, obtener_el_ID_de_documento)       
        return collectionData(
            queryTarjetas, 
            {idField: 'id'}
        ) as Observable<TarjetaCredito[]>;
    }

    setTarjetaEdit( tarjeta: TarjetaCredito ) {
        this.tarjeta$.next( tarjeta );
    }

    getTarjetaEdit(): Observable<TarjetaCredito> {
        return this.tarjeta$.asObservable();
    }

    updateTarjetaCredito( 
        id: any, 
        tarjeta: TarjetaCredito 
    )  {

        let docRef = doc(this.firestore, `Tarjetas/${id}`);

        return updateDoc<any>( docRef, tarjeta );
    }

    deleteTarjetaCredito( id: string ): Promise<any> {

        let docRef = doc(this.firestore, `Tarjetas/${id}`);

        return deleteDoc( docRef );
    }
}
