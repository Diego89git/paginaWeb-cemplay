import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  private urlApi = config.apiUrl + '/api/v1/uploadCategorias';
  private urlApiPrd = config.apiUrl + '/api/v1/uploadProductos';

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.urlApi, formData);
  }
  uploadFilePrd(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.urlApiPrd, formData);
  }
}
