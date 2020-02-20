import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioEntradaComponent } from './formulario-entrada/formulario-entrada.component';
import { FormularioSalidaComponent } from './formulario-salida/formulario-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioEntradaComponent,
    FormularioSalidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
