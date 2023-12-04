import { Component } from '@angular/core';
import { GrupoService } from 'src/app/API/services/grupo.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';
const EXCEL_TYPE='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT='xlsx';
interface jsPDFWithPlugin extends jspdf.jsPDF {
  autoTable: (options: UserOptions) => jspdf.jsPDF;
}
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-tabla-grupos',
  templateUrl: './tabla-grupos.component.html',
  styleUrls: ['./tabla-grupos.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class TablaGruposComponent {
  dataSet:any[]=[]
  SelectedDataSet!:any[]|null
  data:any
  cols!: Column[];
  dataDialog: boolean = false;
  exportColumns!: ExportColumn[];
  mostrarFormulario:boolean=false
  constructor(private grupoService: GrupoService
            , private messageService: MessageService
            , private confirmationService: ConfirmationService){}

  ngOnInit(){
    this.obtenerGrupos()
    this.cols = [
      { field: 'Id', header: 'Id', customExportHeader: 'Codigo Grupo' },
      { field: 'Titulo', header: 'Tiulo' },
      { field: 'Icono', header: 'Icono' },
      { field: 'Seleccionado', header: 'Seleccionado' }
  ];

  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  obtenerGrupos(){
    this.grupoService.getData().subscribe(data=>{
      this.dataSet=data
    })
  }
  selectRow(row:any){
    this.messageService.add({ severity: 'info', summary: 'Grupo Seleccionado', detail: row.Titulo });
  }
  exportPdf() {
    import('jspdf').then((jsPDF) => {
        import('jspdf-autotable').then((x) => {
            const doc = new jsPDF.default('p', 'px', 'a4');
            (doc as any).autoTable(this.exportColumns, this.dataSet);
            doc.save('products.pdf');
        });
    });
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.dataSet);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'products');
    });
}
saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
openNew() {
  this.data = {};
  this.dataDialog = true;
  this.mostrarFormulario=true
}

editRow(row: any) {
  this.data = { ...row };
  this.dataDialog = true;
  this.mostrarFormulario=true
}
deleteRow(row: any) {
  this.confirmationService.confirm({
      message: 'Estas seguro que deseas eliminar: ' + row.Titulo + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.eliminarGrupo(row.Id);
         
      }
  });
}
hideDialog(data:any) {
  this.obtenerGrupos()
  console.log(this.dataSet);
  this.data={}
  this.dataDialog = false;
  this.mostrarFormulario=false
}
eliminarGrupo(id:number){
  this.grupoService.deleteData(id).subscribe(
    (response) => {
      this.dataSet = this.dataSet.filter((val) => val.Id !== id);
      this.data = {};
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Eliminado', life: 3000 });
      this.obtenerGrupos()
    },
    (error) => {
      console.error('Error al eliminar el registro', error);
      this.messageService.add({ severity: 'error', summary: 'Advertencia', detail: 'Registro NO Eliminado : '+error, life: 3000 });
      this.obtenerGrupos()
    }
  );
  
}

}
