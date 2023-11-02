import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { MenuitemComponent } from './componentes/menuitem/menuitem.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { HttpClientModule} from '@angular/common/http';
import { VistaproductosComponent } from './componentes/vistaproductos/vistaproductos.component';
import { CardproductoComponent } from './componentes/cardproducto/cardproducto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductoComponent } from './componentes/addproducto/addproducto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CardcarritoComponent } from './componentes/cardcarrito/cardcarrito.component';
import { ProductocarritoComponent } from './componentes/productocarrito/productocarrito.component';
import { ResumencarritoComponent } from './componentes/resumencarrito/resumencarrito.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CabeceraComponent,
    MenuComponent,
    MenuitemComponent,
    CategoriasComponent,
    CategoriaComponent,
    VistaproductosComponent,
    CardproductoComponent,
    AddproductoComponent,
    CarritoComponent,
    CardcarritoComponent,
    ProductocarritoComponent,
    ResumencarritoComponent
    
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrincipalComponent,
    CabeceraComponent,
    MenuComponent,
    MenuitemComponent,
    CategoriasComponent,
    CategoriaComponent,
    VistaproductosComponent,
    CardproductoComponent,
    AddproductoComponent,
    CarritoComponent,
    CardcarritoComponent,
    ProductocarritoComponent,
    ResumencarritoComponent
  ]
})
export class CatalogoModule { }
