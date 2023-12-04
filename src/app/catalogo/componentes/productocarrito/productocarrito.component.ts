import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarritoService } from 'src/app/AUX/Services/carrito.service';

@Component({
  selector: 'app-productocarrito',
  templateUrl: './productocarrito.component.html',
  styleUrls: ['./productocarrito.component.css']
})

export class ProductocarritoComponent {
  @Input() data:any
  @Output() onClickActualizaCarrito:EventEmitter<any>= new EventEmitter<any>()
  cantidadComprar=0

  constructor(  private carritoService: CarritoService){
    
  }


  sumarCantidad() {
    console.log(this.data)
    this.data.cantidad++;
    this.carritoService.agregarProductoAlCarrito(this.data, this.data.cantidad)
    this.onClickActualizaCarrito.emit()
  }
  restarCantidad() {
    if (this.data.cantidad > 1) {
      this.data.cantidad--;
      this.carritoService.agregarProductoAlCarrito(this.data, this.data.cantidad)
      this.onClickActualizaCarrito.emit()
    }
  }

  obtenerProductosCarrito(){
    return this.carritoService.obtenerProductosEnCarrito()
  }
  quitarDeCarrito(row:any){
    this.carritoService.eliminarProductoDeCarrito(row)
    this.onClickActualizaCarrito.emit()
  }
}
