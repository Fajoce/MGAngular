import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Inspection } from '../Models/inpection';



@Injectable({
  providedIn: 'root'
})
export class InspeccionService {
readonly url = 'https://localhost:44368/api';
  constructor(private httpclient: HttpClient) { }

  getInspection():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/inspeccion');
  }
//
getInspectionbyId(id:number):Observable<Inspection[]>{
  return this.httpclient.get<Inspection[]>(this.url+'/inspeccion'+id);
}
//
  addInspection(data:any){
    return this.httpclient.post(this.url+'/inspeccion/',data);
  }

  updateInspection(id:number,data:any){
    return this.httpclient.put(this.url + '/inspeccion/',id,data);
  }

  deleteInspetion(id:number){
    return this.httpclient.delete(this.url+`/inspeccion/${id}`);
  }
}
