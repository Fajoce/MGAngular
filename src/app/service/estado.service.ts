import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {  
  readonly url = 'https://localhost:44368/api';
  constructor(private httpclient: HttpClient) { }

  getEstado():Observable<any[]>{
    return this.httpclient.get<any>(this.url+'/estados');
  }

  addEstado(data:any){
    return this.httpclient.post(this.url+'/estados',data);
  }

  updateEstado(id:number|string,data:any){
    return this.httpclient.put(this.url + `/estados/${id}`,data);
  }

  deleteEstado(id:number){
    return this.httpclient.delete(this.url+`/estados/${id}`);
  }
}
