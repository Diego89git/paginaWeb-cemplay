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
import { CarouselPrincipalComponent } from './principal/componentes-principal/carousel-principal/carousel-principal.component';

import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { DividerModule } from 'primeng/divider';




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
    ResumencarritoComponent,
    CarouselPrincipalComponent
    
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    CardModule,
    ToastModule,
    ToolbarModule,
    RippleModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RatingModule,
    BrowserAnimationsModule,
    SharedModule,
    ListboxModule,
    DividerModule
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
    ResumencarritoComponent,
    CarouselPrincipalComponent
  ]
})
export class CatalogoModule { }
