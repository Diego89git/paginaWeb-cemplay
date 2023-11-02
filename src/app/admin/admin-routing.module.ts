import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PagGruposComponent } from './componentes/pages/grupos/pag-grupos/pag-grupos.component';
import { PagCategoriasComponent } from './componentes/pages/categorias/pag-categorias/pag-categorias.component';
import { PagProductosComponent } from './componentes/pages/productos/pag-productos/pag-productos.component';

const routes: Routes = [
  {path:'', component: PrincipalComponent, children:[
    {path:'grupos',component: PagGruposComponent},
    {path:'categorias',component: PagCategoriasComponent},
    {path:'productos',component: PagProductosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
