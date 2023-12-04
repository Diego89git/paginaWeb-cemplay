import { Component } from '@angular/core';
import { CarritoService } from './AUX/Services/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store_app';
  constructor(private carritoService: CarritoService){
   
  }
  ngOnInit(){
    this.carritoService.inicializarCarritoDesdeLocalStorage()
  }
}
