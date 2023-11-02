import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cont-menu',
  templateUrl: './cont-menu.component.html',
  styleUrls: ['./cont-menu.component.css']
})
export class ContMenuComponent {

  seleccionado:boolean=false
  contraerSelected:boolean=false
  listaMenu:any[]=[]
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()

  llenarListaMenu(){
    this.listaMenu=[
      {'Id':1,'Nombre':'Grupos','Logo':'fa-solid fa-layer-group','Seleccionado':false,'route':'grupos'},
      {'Id':2,'Nombre':'Categorias','Logo':'fa-solid fa-copyright','Seleccionado':false,'route':'categorias'},
      {'Id':3,'Nombre':'Productos','Logo':'fa-brands fa-product-hunt','Seleccionado':false,'route':'productos'}]
  }

  
seleccionar(a:any){
 this.listaMenu.forEach(i=>i.Seleccionado=false)
  a.Seleccionado=!a.Seleccionado

}
contraer(){
  this.contraerSelected=!this.contraerSelected
  this.onClick.emit(this.contraerSelected);
}
ngOnInit(){
  this.llenarListaMenu()
}
}
