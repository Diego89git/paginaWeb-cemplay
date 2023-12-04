import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GrupoService } from 'src/app/API/services/grupo.service';

@Component({
  selector: 'app-form-grupos',
  templateUrl: './form-grupos.component.html',
  styleUrls: ['./form-grupos.component.css']
})
export class FormGruposComponent {
@Input() data:any
submitted: boolean = false;
@Input() dataDialog!: boolean;
@Input() dataSet!: any[];
@Output() onClick:EventEmitter<any> = new EventEmitter<any>()

constructor(private messageService: MessageService, private grupoService: GrupoService ){

}
hideDialog() {
  this.onClick.emit()
  this.dataDialog = false;
  this.submitted = false;
}
saveProduct() {
  this.submitted = true;

  if (this.data.Titulo?.trim()) {
      if (this.data.Id) {
          this.dataSet[this.findIndexById(this.data.Id)] = this.data;
          this.actualizarData()
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
      } else {
          this.dataSet.push(this.data);
          this.agregarData()
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
          
      }
      
      
      
  }
  
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.dataSet.length; i++) {
      if (this.dataSet[i].Id === id) {
          index = i;
          break;
      }
  }

  return index;
}
agregarData(): void {
  this.data.Seleccionado=0
  this.grupoService.postData(this.data).subscribe(response => {
    this.onClick.emit()
  });
}
actualizarData():void{
  console.log(this.data)
  this.grupoService.putData(this.data.Id,this.data).subscribe(response=>{
    this.onClick.emit()
  })
}

}
