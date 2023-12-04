import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ProductoService } from 'src/app/API/services/producto.service';
import { MenuService } from 'src/app/AUX/Services/menu.service';
import { CarritoService } from 'src/app/AUX/Services/carrito.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  menuVisible = false;
  addProductoVisible=false
  clickFuera:boolean=false;
  productoSeleccionado:any
  listaProductos: any[] = []
  listaProductosVacia: any[] = [
    { RutaImagen: './assets/imagenes/categorias/stockagotado.png', Descripcion: 'Stock Agotado', Id: '999' }
  ]
  vistaPrincipal=true
  constructor(private menuService: MenuService,
              private productoService: ProductoService,
              private carritoService: CarritoService) {}
  handleClickFueraDelMenu() {
    // Lógica específica cuando haces clic en algún elemento fuera del menú
    this.menuService.ocultarVentanas();
  }
  ocultarVentanas(res:boolean) {
    this.menuVisible=res;
  }
 
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.menuVisible && !(event.target as HTMLElement).closest('app-menu')) {
      this.handleClickFueraDelMenu()
    }
  }
  abrirCategoria(row:any){
    this.llenarVistaProductosByIdCategoria(row.Id)
    this.handleClickFueraDelMenu()
    this.vistaPrincipal=false
  }
  llenarVistaProductosByIdCategoria(id:number){
    this.productoService.getDataByIdCategoria(id).subscribe(data=>{
      this.listaProductos=data;
      
      if(data.length===0){
        this.listaProductos=this.listaProductosVacia
        
      }
      this.vistaPrincipal=false
    })
    
  }
  comprar(data:any){
    this.productoSeleccionado=data
    this.addProductoVisible=true
  }
  
  cerrarAddCompra(){
    this.addProductoVisible=false
  }
  home(){
    this.vistaPrincipal=true
  }
}
