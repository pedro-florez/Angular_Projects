import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscarImagenComponent } from './components/buscar-imagen/buscar-imagen.component';
import { ListarImagenComponent } from './components/listar-imagen/listar-imagen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        BuscarImagenComponent,
        ListarImagenComponent,
        NavbarComponent,
        SpinnerComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }