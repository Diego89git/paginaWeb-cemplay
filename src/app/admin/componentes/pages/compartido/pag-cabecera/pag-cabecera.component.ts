import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pag-cabecera',
  templateUrl: './pag-cabecera.component.html',
  styleUrls: ['./pag-cabecera.component.css']
})
export class PagCabeceraComponent {
@Input() data:any
}
