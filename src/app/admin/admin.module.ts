import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ContMenuComponent } from './componentes/menu/cont-menu/cont-menu.component';
import { ItemMenuComponent } from './componentes/menu/item-menu/item-menu.component';
import { CabeceraComponent } from './componentes/pagina/cabecera/cabecera.component';
import { PieComponent } from './componentes/pagina/pie/pie.component';
import { ContenidoComponent } from './componentes/pagina/contenido/contenido.component';
import { PagGruposComponent } from './componentes/pages/grupos/pag-grupos/pag-grupos.component';
import { PagProductosComponent } from './componentes/pages/productos/pag-productos/pag-productos.component';
import { PagCategoriasComponent } from './componentes/pages/categorias/pag-categorias/pag-categorias.component';
import { PagTablaComponent } from './componentes/pages/compartido/pag-tabla/pag-tabla.component';
import { PagCabeceraComponent } from './componentes/pages/compartido/pag-cabecera/pag-cabecera.component';
import { PagPieComponent } from './componentes/pages/compartido/pag-pie/pag-pie.component';

import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PrincipalComponent,
    ContMenuComponent,
    ItemMenuComponent,
    CabeceraComponent,
    PieComponent,
    ContenidoComponent,
    PagProductosComponent,
    PagCategoriasComponent,
    PagTablaComponent,
    PagGruposComponent,
    PagCabeceraComponent,
    PagPieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RatingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    PrincipalComponent,
    ContMenuComponent,
    ItemMenuComponent,
    CabeceraComponent,
    PieComponent,
    ContenidoComponent,
    PagProductosComponent,
    PagCategoriasComponent,
    PagTablaComponent,
    PagGruposComponent,
    PagCabeceraComponent,
    PagPieComponent
  ]
})
export class AdminModule { }
