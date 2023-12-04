import { Component } from '@angular/core';
import { CarritoService } from 'src/app/AUX/Services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  subtotal:number=0
  impuesto:number=0
  total:number=0
constructor(private carritoService: CarritoService){

}
ngOnInit(){
this.actualizaCarrito()
}

actualizaCarrito(){
  this.subtotal=this.carritoService.calculatTotalCarrito()
}
}
