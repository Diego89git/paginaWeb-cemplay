import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CatogeriaService {
  private urlApi=config.apiUrl+'/api/v1/categoria';
  constructor(private http: HttpClient) { }

  public getDataByIdGrupo(id:number):Observable<any>{
    return this.http.get<any>(this.urlApi+'/grupo/'+id);
  }
}
