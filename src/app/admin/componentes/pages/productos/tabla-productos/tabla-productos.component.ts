import { ChangeDetectorRef, Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import * as jspdf from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';
import { CatogeriaService } from 'src/app/API/services/catogeria.service';
import { ProductoService } from 'src/app/API/services/producto.service';

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
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TablaProductosComponent {
  dataSet: any[] = []
  SelectedDataSet!: any[] | null
  data: any
  cols!: Column[];
  dataDialog: boolean = false;
  selectedCategoria: any = { Id: 0, Nombre: 'Seleccione una categoría...' }
  exportColumns!: ExportColumn[];
  categorias: any[] = [];
  mostrarForm: boolean = false 

  constructor(private categoriaService: CatogeriaService, 
              private messageService: MessageService, 
              private confirmationService: ConfirmationService,
              private productoService: ProductoService) {
    this.obtenerCategorias()
  }
  ngOnInit() {
    this.obtenerProductos()

    this.cols = [
      { field: 'Id', header: 'Id', customExportHeader: 'Codigo Categoria' },
      { field: 'Categoria', header: 'CATEGORIA' },
      { field: 'Descripcion', header: 'Descripcion' },
      { field: 'Observacion', header: 'Observacion' },
      { field: 'Marca', header: 'Marca' },
      { field: 'Unidad', header: 'Unidad' },
      { field: 'RutaImagen', header: 'RutaImagen' },
      { field: 'Costo', header: 'Costo' },
      { field: 'Precio_1', header: 'Precio_1' },
      { field: 'Precio_2', header: 'Precio_2' },
      { field: 'Precio_3', header: 'Precio_3' },
      { field: 'Stock', header: 'Stock' },
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  obtenerProductos() {
    this.productoService.getData().subscribe(data => {
      this.dataSet = data
    })
  }
  obtenerCategorias() {
    this.categoriaService.getData().subscribe(data => {
      this.categorias = data
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
    this.selectedCategoria = { Id: 0, Nombre: 'Seleccione una categoría...' }
    this.data = {};
    this.mostrarForm = true
    this.dataDialog = true;

  }
  editRow(row: any) {
    this.mostrarForm = true
    this.selectedCategoria = { ...this.categorias.find((reg: any) => reg.Id == row.IdCategoria) };
    this.data = { ...row };
    this.dataDialog = true;
  }
  deleteRow(row: any) {
    this.confirmationService.confirm({
      message: 'Estas seguro que deseas eliminar: ' + row.Titulo + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eliminarProducto(row.Id);
      }
    });
  }
  hideDialog() {
    this.obtenerCategorias()
    this.mostrarForm = false
    this.dataDialog = false;
  }
  eliminarProducto(id: number) {
    this.productoService.deleteData(id).subscribe(
      (response) => {
        this.dataSet = this.dataSet.filter((val) => val.Id !== id);
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
