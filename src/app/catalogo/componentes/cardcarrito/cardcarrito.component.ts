import { Component } from '@angular/core';
import { CarritoService } from 'src/app/AUX/Services/carrito.service';

@Component({
  selector: 'app-cardcarrito',
  templateUrl: './cardcarrito.component.html',
  styleUrls: ['./cardcarrito.component.css']
})
export class CardcarritoComponent {
  datosCarrito :any
  constructor(  private carritoService: CarritoService){
    this.datosCarrito= this.carritoService.obtenerProductosEnCarrito() 
  }
}
