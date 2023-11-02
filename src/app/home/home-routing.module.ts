import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AboutComponent } from './paginas/about/about.component';
import { AccederComponent } from './paginas/acceder/acceder.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent,
children:[
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'about',component:AboutComponent},
  {path:'acceder',component:AccederComponent},
  {path:'prodser',component:CatalogoComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'tienda',component:TiendaComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
