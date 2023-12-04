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
  public postData(data: any): Observable<any> {
    return this.http.post<any>(this.urlApi, data);
  }
  public putData(id: number, data: any): Observable<any> {
    const apiUrl = `${this.urlApi}/${id}`;
    return this.http.put<any>(apiUrl, data);
  }
  public deleteData(id: number): Observable<any> {
    const apiUrl = `${this.urlApi}/${id}`;
    return this.http.delete<any>(apiUrl);
  }
}
