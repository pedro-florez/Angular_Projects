import { Validators } from "@angular/forms";

export const EmpleadoRule = {    
    nombre:       [
        '', 
        [
            Validators.required,
            Validators.pattern('^[^\\s][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+[^\\s]$')
        ]
    ],
    apellidos: [
        '', 
        [
            Validators.required,
            Validators.pattern('^[^\\s][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+[^\\s]$')
        ]
    ],
    email: [
        '', 
        [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
    ],
    telefono: [
        '', 
        [
            Validators.required,
            Validators.pattern('^[0-9- ]+$')
        ]
    ]
};