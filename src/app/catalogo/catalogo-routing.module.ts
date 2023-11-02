import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path:'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
