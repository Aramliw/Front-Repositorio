import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivosComponent } from './components/arquivos/arquivos.component';
import { AddarquivosComponent } from './components/addarquivos/addarquivos.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path:"", component: InicioComponent
  },
  {
    path:"arquivos", component: ArquivosComponent
  },
  {   
    path:"addarquivos", component: AddarquivosComponent
  },
  {
    path:"entrar", component: EntrarComponent
  },
  {
    path:"contactos", component: ContactosComponent
  },
  {
    path:"registrar", component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
