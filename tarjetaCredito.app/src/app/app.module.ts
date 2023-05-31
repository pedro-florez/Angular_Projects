import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxMaskModule, IgxInputGroupModule } from 'igniteui-angular';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AgregarTarjetaComponent } from './components/agregar-tarjeta/agregar-tarjeta.component';
import { ListarTarjetaComponent } from './components/listar-tarjeta/listar-tarjeta.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    AgregarTarjetaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxMaskModule,
    IgxInputGroupModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(() => initializeApp( environment.firebase )),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
