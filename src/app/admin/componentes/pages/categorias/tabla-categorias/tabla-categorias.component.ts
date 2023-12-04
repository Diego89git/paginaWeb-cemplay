import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import * as jspdf from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';
import { CatogeriaService } from 'src/app/API/services/catogeria.service';
import { GrupoService } from 'src/app/API/services/grupo.service';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = 'xlsx';
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
  selector: 'app-tabla-categorias',
  templateUrl: './tabla-categorias.component.html',
  styleUrls: ['./tabla-categorias.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TablaCategoriasComponent {
  dataSet: any[] = []
  SelectedDataSet!: any[] | null
  data: any
  cols!: Column[];
  dataDialog: boolean = false;
  selectedGrupo: any = { Id: 0, Titulo: 'Seleccione...' }
  exportColumns!: ExportColumn[];
  grupos: any[] = [];
  mostrarForm: boolean = false
  constructor(private categoriaService: CatogeriaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private grupoService: GrupoService) {
    this.obtenerGrupos()
  }
  ngOnInit() {
    this.obtenerCategorias()

    this.cols = [
      { field: 'Id', header: 'Id', customExportHeader: 'Codigo Categoria' },
      { field: 'Nombre', header: 'NOMBRE' },
      { field: 'Grupo', header: 'GRUPO' },
      { field: 'Tipo', header: 'TIPO (Grupo/Detalle)' },
      { field: 'RutaLogo', header: 'RUTA LOGO' }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  obtenerCategorias() {
    this.categoriaService.getData().subscribe(data => {
      this.dataSet = data
    })
  }
  obtenerGrupos() {
    this.grupoService.getData().subscribe(data => {
      this.grupos = data
    })
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
    this.selectedGrupo = { Id: 0, Titulo: 'Seleccione...' }
    this.data = {};
    this.mostrarForm = true
    this.dataDialog = true;

  }
  editRow(row: any) {
    this.mostrarForm = true
    this.selectedGrupo = { ...this.grupos.find((reg: any) => reg.Id == row.IdGrupo) };
    this.data = { ...row };
    this.dataDialog = true;
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
  hideDialog() {
    this.obtenerCategorias()
    console.log(this.dataSet);
    this.data = {}
    this.dataDialog = false;
    this.mostrarForm = false

  }
  eliminarGrupo(id: number) {
    this.categoriaService.deleteData(id).subscribe(
      (response) => {
        //this.dataSet = this.dataSet.filter((val) => val.Id !== id);
        this.data = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Eliminado', life: 3000 });
        this.obtenerCategorias()
      },
      (error) => {
        console.error('Error al eliminar el registro', error);
        this.messageService.add({ severity: 'error', summary: 'Advertencia', detail: 'Registro NO Eliminado : ' + error, life: 3000 });
        this.obtenerCategorias()
      }
    );
  }

}
