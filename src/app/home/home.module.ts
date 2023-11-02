import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CabeceraComponent } from './componenetes/cabecera/cabecera.component';
import { PieComponent } from './componenetes/pie/pie.component';
import { MenuComponent } from './componenetes/menu/menu.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AboutComponent } from './paginas/about/about.component';
import { CatalogoComponent } from './paginas/catalogo/catalogo.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { AccederComponent } from './paginas/acceder/acceder.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    InicioComponent,
    AboutComponent,
    CatalogoComponent,
    ContactoComponent,
    TiendaComponent,
    AccederComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    PrincipalComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent,
    InicioComponent,
    AboutComponent,
    CatalogoComponent,
    ContactoComponent,
    TiendaComponent,
    AccederComponent
  ]
})
export class HomeModule { }
