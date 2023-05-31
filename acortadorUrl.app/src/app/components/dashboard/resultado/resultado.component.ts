import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.component.html',
    styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

    btnNameCopy:  string  = 'Copiar';
    btnColorCopy: string  = 'btn-secondary';

    @Input() urlCorta: string = '';

    copiarUrlCorta(): void {
        
        navigator.clipboard.writeText( this.urlCorta );

        this.btnColorCopy = 'btn-success';
        this.btnNameCopy  = 'Copiado!';

        setTimeout(() => {

            this.btnColorCopy = 'btn-secondary';
            this.btnNameCopy  = 'Copiar';
            
        }, 1000);
    }
}
