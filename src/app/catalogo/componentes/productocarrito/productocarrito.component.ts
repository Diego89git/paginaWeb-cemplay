import { Component, Input } from '@angular/core';
import { CarritoService } from 'src/app/AUX/Services/carrito.service';

@Component({
  selector: 'app-productocarrito',
  templateUrl: './productocarrito.component.html',
  styleUrls: ['./productocarrito.component.css']
})

export class ProductocarritoComponent {
  @Input() data:any
  cantidadComprar=0

  constructor(  private carritoService: CarritoService){
    
  }


  sumarCantidad() {
    console.log(this.data)
    this.cantidadComprar++;
  }
  restarCantidad() {
    if (this.cantidadComprar > 1) {
      this.cantidadComprar--;
    }
  }

  obtenerProductosCarrito(){
    return this.carritoService.obtenerProductosEnCarrito()
  }
}
