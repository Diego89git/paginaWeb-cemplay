import { Component, EventEmitter, Output } from '@angular/core';
import { CatogeriaService } from 'src/app/API/services/catogeria.service';
import { ProductoService } from 'src/app/API/services/producto.service';

@Component({
  selector: 'app-carousel-principal',
  templateUrl: './carousel-principal.component.html',
  styleUrls: ['./carousel-principal.component.css']
})
export class CarouselPrincipalComponent {
  categorias: any[] = [];
  productos: any[] = []
  numItems = 5
  responsiveOptions: any[] | undefined;
  @Output() onClickCat:EventEmitter<any> = new EventEmitter<any>()
  @Output() onClickPrd:EventEmitter<any> = new EventEmitter<any>()
  constructor(
    private categoriaService: CatogeriaService,
    private productoService: ProductoService) { }

  ngOnInit() {
    this.obtenerCategorias();
    this.obtenerProductos()
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  obtenerCategorias() {
    this.categoriaService.getData().subscribe(data => {
      this.categorias = data
      console.log(data);

    })
  }
  obtenerProductos() {
    this.productoService.getData().subscribe(data => {
      this.productos = data
    })
  }
  abrirCategoria(row:any){
    this.onClickCat.emit(row)
  }
  comprar(row:any){
    this.onClickPrd.emit(row)
  }
}

