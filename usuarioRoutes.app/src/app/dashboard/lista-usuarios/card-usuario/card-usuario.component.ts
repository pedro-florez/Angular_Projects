import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-usuario',
    templateUrl: './card-usuario.component.html',
    styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

    @Input() user: any;
    id!:     string; 
    nombre!: string;
    email!:  string;
    imagen!: string;

    ngOnInit(): void {

        let { login, name, email, picture } = this.user;

        this.id     =  login.uuid;
        this.nombre = `${name.first} ${name.last}`;
        this.email  = email;
        this.imagen = picture.large;
    }

}
