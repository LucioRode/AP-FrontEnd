import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './Componentes/info/info.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    EstudiosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
