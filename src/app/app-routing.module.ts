import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=>import('./home/home-routing.module').then((m)=>m.HomeRoutingModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin-routing.module').then((m)=>m.AdminRoutingModule)},
  {path:'catalogo', loadChildren:()=>import('./catalogo/catalogo-routing.module').then((m)=>m.CatalogoRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
