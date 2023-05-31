import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListaUsuariosComponent } from './dashboard/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './login/login.component';
import { CardUsuarioComponent } from './dashboard/lista-usuarios/card-usuario/card-usuario.component';
import { DetalleUsuarioComponent } from './dashboard/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListaUsuariosComponent,
    LoginComponent,
    CardUsuarioComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
