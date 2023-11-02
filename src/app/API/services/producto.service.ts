import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlApi=config.apiUrl+'/api/v1/producto';
  constructor(private http: HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
  public getDataByIdCategoria(id:number):Observable<any>{
    return this.http.get<any>(this.urlApi+'/categoria/'+id);
  }
}
