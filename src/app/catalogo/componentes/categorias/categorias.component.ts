import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  @Input() data:any
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()
  abrir(row:any)
{
  this.onClick.emit(row)
}
}
