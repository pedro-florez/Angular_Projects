import { Component } from '@angular/core';

@Component({
    selector: 'app-convertidor',
    templateUrl: './convertidor.component.html',
    styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {

    loading:     boolean = false;
    monto!:      number;
    codigoFrom:  string = 'USD';
    codigoTo:    string = 'COP';
    nombreFrom!: string;
    nombreTo!:   string;
    resultado!:  number;

    divisas: any[] = [
        { nombre: "Dólar", code: "USD" },
        { nombre: "Euro", code: "EUR" },
        { nombre: "Real", code: "BRL" },
        { nombre: "Peso colombiano", code: "COP" },  
        { nombre: "Sol peruano", code: "PEN" },
        { nombre: "Libra esterlina", code: "GBP" }
    ];

    ocultarPanelResultado(): void {
        this.resultado = 0;
    }

    convertirMoneda(): void {

        if (this.monto > 0 && 
            this.codigoFrom != null && 
            this.codigoTo != null
        ) {
            
            let myHeaders = new Headers();

            myHeaders.append(
                "apikey", 
                "nzbzRZlwwexZqAiyo2T4UKMgtZ9nmyDW"
            );

            //N5CtKf992hN0uYA7kIL6mAonaUw1HA1D    
                 
            const dominio = 'https://api.apilayer.com/exchangerates_data/convert?';
            const params  = `to=${this.codigoTo}&from=${this.codigoFrom}&amount=${this.monto}`;
    
            const endpoint = `${dominio}${params}`;

            const fetchCurrency = async () => {

                this.loading = true;

                try {
                    
                    const response = await fetch( endpoint, {
                        method: 'GET',
                        redirect: 'follow',
                        headers: myHeaders
                    });
    
                    if ( response.status === 200 ) {

                        const { result } = await response.json();
                        this.resultado = result;

                        const divisaFrom = this.divisas.find(
                            element => element.code === this.codigoFrom 
                        );

                        const divisaTo = this.divisas.find(
                            element => element.code === this.codigoTo 
                        );

                        this.nombreFrom = divisaFrom.nombre;
                        this.nombreTo   = divisaTo.nombre;

                    }else {

                        alert('Algo salió mal, por favor comunícate con el administrador.');
                    }                    

                } catch (err) {

                    console.log('err', err);

                } finally {

                    this.loading = false;
                }
            }

            fetchCurrency();
        }
    }   
}
