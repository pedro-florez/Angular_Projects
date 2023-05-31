import { FormGroup } from "@angular/forms";

export const ColumnsEmpleado = [
    'nombre',
    'apellidos',
    'email',
    'telefono',
    'fechaRegistro',
    'acciones'
];

export const ListaEmpleadosDB = [
    {
        nombre:        'Juan',
        apellidos:     'Pérez',
        email:         'juan.perez@test.com',
        telefono:      '555-123-4567',
        fechaRegistro: new Date('2022-05-13')
    },
    {
        nombre:        'María',
        apellidos:     'González',
        email:         'maria.gonzalez@test.com',
        telefono:      '555-234-5678',
        fechaRegistro: new Date('2022-05-12')
    },
    {
        nombre:        'Carlos',
        apellidos:     'López',
        email:         'carlos.lopez@test.com',
        telefono:      '555-345-6789',
        fechaRegistro: new Date('2022-05-11')
    },
    {
        nombre:        'Ana',
        apellidos:     'Martínez',
        email:         'ana.martinez@test.com',
        telefono:      '555-456-7890',
        fechaRegistro: new Date('2022-05-10')
    },    
    {
        nombre:         'Maia',
        apellidos:      'Atticus',
        email:          'olivia@test.com',
        telefono:       '798653435',
        fechaRegistro:  new Date('2023-04-07')
    },    
    {
        nombre:         'Amelia',
        apellidos:      'Perez',
        email:          'amelia@test.com',
        telefono:       '12348945',
        fechaRegistro:  new Date('2023-04-07')
    },
    {
        nombre:         'Isabella ',
        apellidos:      'Hernandez',
        email:          'isabella@test.com',
        telefono:       '854578978',
        fechaRegistro:  new Date('2023-04-08')
    },
    {
        nombre:         'Mia',
        apellidos:      'Castro',
        email:          'mia@test.com',
        telefono:       '945645568',
        fechaRegistro:  new Date('2023-04-08')
    }
];