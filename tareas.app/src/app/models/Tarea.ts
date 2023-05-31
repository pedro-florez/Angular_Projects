
export class Tarea {

    nombre:string; 
    estado:boolean;

    constructor( nombre:string, estado:boolean = false) {
        
        this.nombre = nombre;
        this.estado = estado;
    }
}