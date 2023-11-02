import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vistaproductos',
  templateUrl: './vistaproductos.component.html',
  styleUrls: ['./vistaproductos.component.css']
})
export class VistaproductosComponent {
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()
  @Input() valorMostrarCategoria:boolean=false;
  @Input() data!:any[];
   contactForm!:FormGroup;
  countries = [
    { id: 1, name: "Del precio mas alto al mas bajo" },
    { id: 2, name: "Del precio mas bajo al mas alto" },
    { id: 3, name: "Por categoria" },
    { id: 4, name: "Mas vendido" }
  ];
  constructor(private fb:FormBuilder) {
  }
 
  ngOnInit() {
 
    this.contactForm = this.fb.group({
      country: [null]
    });
  }
  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }
  comprar(data:any){
    this.onClick.emit(data)
  }
}
