import { Component } from '@angular/core';

@Component({
    selector: 'app-app-piano',
    templateUrl: './app-piano.component.html',
    styleUrls: ['./app-piano.component.css']
})
export class AppPianoComponent {

    coloresPiano: string[] = [
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'purple'
    ];

    escucharSonido(numero: number): void {

        if ( numero >= 1 && numero <=7 ) {

            let audio = new Audio();

            audio.src = `../../assets/sonidos/note${numero}.wav`;
            audio.load();
            audio.play();
                      
        } else {

            alert('Error de audio.');
        }              
    }
}
