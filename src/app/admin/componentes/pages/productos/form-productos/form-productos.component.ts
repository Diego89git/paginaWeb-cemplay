import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ArchivosService } from 'src/app/API/services/archivos.service';
import { ProductoService } from 'src/app/API/services/producto.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  @Input() data: any
  @Input() categorias: any[] = []
  @Input() dataDialog: boolean = false
  @Input() dataSet: any
  @Input() selectedCategoria: any
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  @Input() previsualizacion: any
  formGroup: FormGroup | any
  submit: boolean = false
  archivos: any[] = []
  rutaOriginal:any

  constructor(
    private sanitizer: DomSanitizer,
    private archivosService: ArchivosService,
    private productoService: ProductoService,
    private messageService: MessageService
  ){

  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      IdCategoria: new FormControl<any | null>(null)
    });
  }

  hideDialog() {
    this.onClick.emit()
  }
  onFileUpload(event: any): void {
    const archivoCapturado = event.target.files[0];
    if (archivoCapturado) {
      this.extraerbase64(archivoCapturado).then((imagen: any) => {
        this.previsualizacion = imagen.base;
      });
      this.archivos = [archivoCapturado];
      console.log(this.archivos)
    }
  }
  extraerbase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event)
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg)
      const reader = new FileReader()
      reader.readAsDataURL($event)
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      }
    } catch (error) {
      return null
    }
    return null;
  });

  showDialog() {
    if(this.data.Id){
      this.previsualizacion=this.data.RutaImagen
      this.rutaOriginal=this.data.RutaImagen
    }
  }
  saveProduct(): void {
    this.submit = true;
    this.data.IdCategoria=this.selectedCategoria.Id
    if(this.data.IdCategoria==0){
      this.messageService.add({severity: 'error',summary: 'Errores', detail: 'No se ha seleccionado la Categoría', life: 3000});
    }else{
      if(!this.previsualizacion){
        this.messageService.add({severity: 'error',summary: 'Errores', detail: 'No se ha seleccionado una Imagen', life: 3000});
      }else{
        if (this.data.Descripcion?.trim()) {
          if (this.data.Id) {
            const index = this.findIndexById(this.data.Id);
            if (index !== -1) {
              this.dataSet[index] = { ...this.dataSet[index], ...this.data };
              if(this.rutaOriginal && this.rutaOriginal!=this.previsualizacion){
                
                this.actualizarArchivo(this.data)
              }else{
               
                this.actualizarData(this.data)
              }   
              this.data = {};
            }
          } else {
            this.dataSet.push(this.data);
            this.guardarArchivo(this.data);        
            this.data = {};
          }
    
          this.dataSet = [...this.dataSet];
          this.dataDialog = false;
        }
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
  actualizarArchivo(row:any): void {
    this.archivosService.uploadFilePrd(this.archivos[0]).subscribe(
      (data) => {
        row.RutaImagen = data.filePath;
        
        this.actualizarData(row);
      },
      (error) => {
        console.error('Error al subir archivo', error);
      }
    );
}
actualizarData(row:any): void {
  console.log(this.data)
  this.productoService.putData(row.Id, row).subscribe(response => {
    this.onClick.emit()
    this.messageService.add({severity: 'success',summary: 'Successful', detail: 'Registro Actualizado', life: 3000});
  });
}
guardarArchivo(row:any): void {
  console.log('Se va a imprimir');
  console.log(this.archivos[0]);  
  console.log('se imprimio')
  
  this.archivosService.uploadFilePrd(this.archivos[0]).subscribe(
    (data) => {
      row.RutaImagen = data.filePath;
      this.agregarData(row);
    },
    (error) => {
      console.error('Error al subir archivo', error);
    }
  );
}
agregarData(row:any): void {    
    this.productoService.postData(row).subscribe(response => {
    this.onClick.emit()
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
  });
}
}
