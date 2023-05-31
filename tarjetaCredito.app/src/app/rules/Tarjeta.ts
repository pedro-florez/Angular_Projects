import { Validators } from "@angular/forms";

export const TarjetaRule = {    
    titular:       [
        '', 
        [
            Validators.required,
            Validators.pattern('^[^\\s][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+[^\\s]$')
        ]
    ],
    numeroTarjeta: [
        '', 
        [
            Validators.required,
            Validators.pattern('^[0-9]{16}$')
        ]
    ],
    fechaExpiracion: [
        '', 
        [
            Validators.required,
            Validators.pattern('^(0[1-9]|1[0-2])[0-9]{2}$')
        ]
    ],
    cvv: [
        '', 
        [
            Validators.required,
            Validators.pattern('^[0-9]{3}$')
        ]
    ]
};