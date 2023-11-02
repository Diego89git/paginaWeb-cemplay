import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cardproducto',
  templateUrl: './cardproducto.component.html',
  styleUrls: ['./cardproducto.component.css']
})
export class CardproductoComponent {
  @Input() data:any
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()

  comprar(data:any){
    this.onClick.emit(data)
  }
}
