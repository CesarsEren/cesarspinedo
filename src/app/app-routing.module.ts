import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { AcercaComponent } from './views/acerca/acerca.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { PortafolioComponent } from './views/portafolio/portafolio.component';


const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  { path: "Inicio", component: InicioComponent }, 
  { path: "Acerca", component: AcercaComponent },
  { path: "Contacto",component: ContactoComponent},
  { path: "Portafolio",component: PortafolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
