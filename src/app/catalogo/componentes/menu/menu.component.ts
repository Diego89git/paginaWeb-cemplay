import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CatogeriaService } from 'src/app/API/services/catogeria.service';
import { GrupoService } from 'src/app/API/services/grupo.service';
import { MenuService } from 'src/app/AUX/Services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private http: HttpClient, 
              private grupoService:GrupoService,
              private categoriaService:CatogeriaService,
              private menuService: MenuService){}
  @Output() valorMostrarCategoria= new EventEmitter<boolean>();
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>()
  @Input() clickFuera:boolean=false;
  mostrarCategoria = false;
  contadorClick:number=0;
  opcionActual:string='';
  listaMenu: any[] = []
  
  ngOnInit(){
    this.llenarListaMenu();
    this.menuService.ocultarVentanas$.subscribe(() => {
      this.ocultarMenuCategoria();
    });
  }
  ocultarMenuCategoria(){
      this.mostrarCategoria=false;
      this.valorMostrarCategoria.emit(this.mostrarCategoria);
      this.listaMenu.forEach(i => i.Seleccionado = false)
      this.contadorClick=0;
      this.opcionActual='';
  }
  llenarListaMenu(){
    this.grupoService.getData().subscribe(data=>{
      this.listaMenu=data;
    })
    
  }
  
  listaCategorias: any[] = []
  listaCategoriasVacia: any[] = [
    { RutaLogo: './assets/imagenes/categorias/stockagotado.png', Nombre: 'Stock Agotado', Id: 'C99' }
  ]
  abrirMenu(row: any) {
    let opcion: number = row.Id;
    this.llenarListaCategoriasByIdGrupo(opcion);

    if(this.opcionActual===''){
      this.mostrarCategoria=true;
    }
    if(this.opcionActual===row.Id && this.contadorClick===0){
      this.contadorClick=this.contadorClick+1;
      this.mostrarCategoria =false;
      
    }else{
      this.contadorClick=0;
      this.mostrarCategoria = true;
    }
    this.opcionActual=row.Id
    
    this.valorMostrarCategoria.emit(this.mostrarCategoria);
  }
  llenarListaCategoriasByIdGrupo(id:number){
    this.categoriaService.getDataByIdGrupo(id).subscribe(data=>{
      
      this.listaCategorias=data;
      if(data.length===0){
        this.listaCategorias=this.listaCategoriasVacia
      }
    })
    
  }
  seleccionarItem(row:any){
    this.listaMenu.forEach(i => i.Seleccionado = false)
    if(this.opcionActual===row.Id && this.contadorClick===0){
      row.Seleccionado = true;
      
    }else{
      row.Seleccionado = false;
    }
     
  }
  
  abrirCategoria(row: any) {
    this.onClick.emit(row)
  }
  ocultarCategoria(){
    
  }
}
