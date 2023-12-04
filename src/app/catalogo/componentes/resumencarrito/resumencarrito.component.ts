import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumencarrito',
  templateUrl: './resumencarrito.component.html',
  styleUrls: ['./resumencarrito.component.css']
})
export class ResumencarritoComponent {
@Input() subtotal?:number
@Input() impuesto?:number
@Input() total?:number


}
