import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './components/dashboard/resultado/resultado.component';
import { AcortadorInterceptor } from './services/acortador.interceptor';

@NgModule({    
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        SpinnerComponent,
        ResultadoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [{
        // Registrar el Interceptor
        provide: HTTP_INTERCEPTORS,
        useClass: AcortadorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }