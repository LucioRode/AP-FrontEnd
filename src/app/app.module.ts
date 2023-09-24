import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './Componentes/info/info.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { DesarrollosComponent } from './Componentes/desarrollos/desarrollos.component';
import { LenguajesComponent } from './Componentes/lenguajes/lenguajes.component';
import { IdiomasComponent } from './Componentes/idiomas/idiomas.component';
import { CursosComponent } from './Componentes/cursos/cursos.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    EstudiosComponent,
    FooterComponent,
    ExperienciaComponent,
    DesarrollosComponent,
    LenguajesComponent,
    IdiomasComponent,
    CursosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
