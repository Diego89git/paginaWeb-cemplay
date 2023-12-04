import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { ArchivosService } from 'src/app/API/services/archivos.service';
import { CatogeriaService } from 'src/app/API/services/catogeria.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css']
})
export class FormCategoriasComponent{
  @Input() data: any
  submitted: boolean = false;
  @Input() dataDialog!: boolean;
  @Input() dataSet!: any[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  @Input() grupos!: any[];
  archivos: any[] = [];
  @Input() previsualizacion: any;
  @Input()selectedGrupo:any
  rutaOriginal:any;
  formGroup?: FormGroup | any;
  constructor(
    private messageService: MessageService,
    private categoriaService: CatogeriaService,
    private archivosService: ArchivosService,
    private sanitizer: DomSanitizer
  ) {

  }
  ngOnInit(){
    this.formGroup = new FormGroup({
      IdGrupo: new FormControl<any | null>(null)
    });
  }
  onFileUpload(event: any): void {
    const archivoCapturado = event.target.files[0];
    if(archivoCapturado){
      this.extraerbase64(archivoCapturado).then((imagen: any) => {
        this.previsualizacion = imagen.base;
      });
      this.archivos = [archivoCapturado];
      console.log(this.archivos)
    }    
  }
   guardarArchivo(row:any): void {
      this.archivosService.uploadFile(this.archivos[0]).subscribe(
        (data) => {
          row.RutaLogo = data.filePath;
          this.agregarData(row);
        },
        (error) => {
          console.error('Error al subir archivo', error);
        }
      );
  }
  actualizarArchivo(row:any): void {
    this.archivosService.uploadFile(this.archivos[0]).subscribe(
      (data) => {
        row.RutaLogo = data.filePath;
        this.actualizarData(row);
      },
      (error) => {
        console.error('Error al subir archivo', error);
      }
    );
}
  showDialog() {
    if(this.data.IdGrupo){
      this.previsualizacion=this.data.RutaLogo
      this.rutaOriginal=this.data.RutaLogo
    }
  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false;
    this.submitted = false;
  }
  saveProduct(): void {
    this.submitted = true;
    this.data.IdGrupo=this.selectedGrupo.Id
    if (this.data.Nombre?.trim()) {
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
  agregarData(row:any): void {    
    this.categoriaService.postData(row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
    });
  }
  actualizarData(row:any): void {
    console.log(this.data)
    this.categoriaService.putData(row.Id, row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({severity: 'success',summary: 'Successful', detail: 'Registro Actualizado', life: 3000});
    });
  }
  extraerbase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg= window.URL.createObjectURL($event)
      const image= this.sanitizer.bypassSecurityTrustUrl(unsafeImg)
      const reader = new FileReader()
      reader.readAsDataURL($event)
      reader.onload=()=>{
        resolve({
          base:reader.result
        });
      };
      reader.onerror=error=>{
        resolve({
          base:null
        });
      }
    } catch (error) {
      return null
    }
    return null;
  });
 
}
