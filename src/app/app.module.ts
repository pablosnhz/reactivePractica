import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { CommonModule } from '@angular/common';
import { FormularioNuevoComponent } from './pagesForms/formulario/formulario.component';
import { FormularioAnidadoNuevoComponent } from './pagesForms/formulario-anidado/formulario-anidado.components';
import { FormularioArrayNuevoComponent } from './pagesForms/formulario-array/formulario-array.component';
import { FormularioValidadoNuevoComponent } from './pagesForms/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntacionPipe } from './pipes/calcular-puntacion.pipe';

// LOCALE PARA PIPES
import { LOCALE_ID } from '@angular/core';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TodolistComponent } from './signals/todolist/todolist.component';
import { PruebaComponent } from './signals/prueba/prueba.component';
import { RxjsComponent } from './signals/rxjs/rxjs/rxjs.component';
// registramos el LOCALE_ID de 'es' para usarlo en los pipes
registerLocaleData(localeES);


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,

    FormularioNuevoComponent,
    FormularioAnidadoNuevoComponent,
    FormularioArrayNuevoComponent,
    FormularioValidadoNuevoComponent,
    EjemploPipesComponent,

    // pipes
    MultiplicaPipe,
     CalcularPuntacionPipe,
     TodolistComponent,
     PruebaComponent,
     RxjsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    // Importamos el reactive para trabajar con formularios reactivo
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
  ],
  providers: [
    // registrar el locale de ES para que los PIPES salgan en espanol
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
