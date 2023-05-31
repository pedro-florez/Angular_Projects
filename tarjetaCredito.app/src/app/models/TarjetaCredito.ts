export class TarjetaCredito {

    id?:                string;
    titular:            string;
    numeroTarjeta:      string;
    fechaExpiracion:    string;
    cvv:                number;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    
    constructor(
        titular:            string,
        numeroTarjeta:      string,
        fechaExpiracion:    string,
        cvv:                number,
        fechaRegistro:      Date,
        fechaActualizacion: Date
    ) {
        
        this.titular            = titular;
        this.numeroTarjeta      = numeroTarjeta;
        this.fechaExpiracion    = fechaExpiracion;
        this.cvv                = cvv;
        this.fechaRegistro      = fechaRegistro;
        this.fechaActualizacion = fechaActualizacion;
    }
}