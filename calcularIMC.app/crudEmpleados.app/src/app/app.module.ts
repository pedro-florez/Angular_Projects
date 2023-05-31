import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioEmpleadoComponent } from './components/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmacionComponent } from './shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

@NgModule({
    declarations: [
        AppComponent,
        FormularioEmpleadoComponent,
        ListaEmpleadoComponent,
        NavbarComponent,
        MensajeConfirmacionComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
