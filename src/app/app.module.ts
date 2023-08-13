import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArquivosComponent } from './components/arquivos/arquivos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AddarquivosComponent } from './components/addarquivos/addarquivos.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GeralService } from './services/geral.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArquivosComponent,
    HeaderComponent,
    FooterComponent,
    ContactosComponent,
    AddarquivosComponent,
    EntrarComponent,
    RegistrarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [GeralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
