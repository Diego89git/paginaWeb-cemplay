import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/AUX/Services/carrito.service';


@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent {
  @Input() data:any
  @Output() cerrar = new EventEmitter<void>();

  cantidadComprar: number = 1;

  constructor( private carritoCompraService:CarritoService,
                private router: Router){}
  sumarCantidad() {
    this.cantidadComprar++;
  }
  agregarProducto(){
    this.carritoCompraService.agregarProductoAlCarrito(this.data,this.cantidadComprar)
    this.obtenerProductosCarrito()
  }
  obtenerProductosCarrito(){
    const carrito=this.carritoCompraService.obtenerProductosEnCarrito()
    console.log(carrito)
  }
  restarCantidad() {
    if (this.cantidadComprar > 1) {
      this.cantidadComprar--;
    }
  }

  seguirComprando() {
    this.agregarProducto()
    this.cerrar.emit();
  }

  irAlCarro() {
    this.agregarProducto()
    this.cerrar.emit();
    this.router.navigate(['/catalogo/carrito'])
  }

  cerrarModal() {

    this.cerrar.emit();
    
  }

}
