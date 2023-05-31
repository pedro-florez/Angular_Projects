import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { AppPianoComponent } from './app-piano/app-piano.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    AppPianoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
