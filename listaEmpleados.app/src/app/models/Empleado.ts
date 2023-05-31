export class Empleado {

    id:        number;
    nombre:    string;
    apellidos: string;
    genero:    string;
    salario:   number;

    constructor(
        id:        number,
        nombre:    string,
        apellidos: string,
        genero:    string,
        salario:   number
    ) {

        this.id        = id;
        this.nombre    = nombre;
        this.apellidos = apellidos;
        this.genero    = genero;
        this.salario   = salario;
    }
}