import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Rutas Principales
import { AppRoutingModule } from './app-routing.module';

// Plantilla Master
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,     
        LayoutsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }