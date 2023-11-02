import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../../config';
@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private urlApi=config.apiUrl+'/api/v1/grupo';
  constructor(private http: HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
}
