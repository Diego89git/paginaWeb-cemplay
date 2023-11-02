import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  @Input() dato:any
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()
  abrir(row:any)
{
  this.onClick.emit(row)
}
}
