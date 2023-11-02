import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent {
  @Input() data:any
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()
  


  abrir(row:any)
{
  this.onClick.emit(row)
}
}
