import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Output() onClickHome:EventEmitter<any>= new EventEmitter<any>()
  faCoffee = faLayerGroup;
  constructor( private router:Router){library: FaIconLibrary}
  irAlCarro() {

    this.router.navigate(['/catalogo/carrito'])
  }
  home(){
    this.onClickHome.emit()
    this.router.navigate(['/catalogo'])
  }
}
