import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inspection } from '../Models/inpection';
import { Tipos } from '../Models/tipos';

@Injectable({
  providedIn: 'root'
})
export class InspectionTypeService {

    readonly url = 'https://localhost:44368/api';
  constructor(private httpclient: HttpClient) { }

  getInspectionType():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/tipoinspeccion');
  }

  //
  getInspectionTypebyId(id:number):Observable<Tipos>{
    return this.httpclient.get<Tipos>(this.url+'/tipoinspeccion/'+id);
  }
  //
  addInspectionType(data:any){
    return this.httpclient.post(this.url+'/tipoinspeccion',data);
  }

  updateInspectionType(id:number,data:any){
    return this.httpclient.put(this.url + `/tipoinspeccion/${id}`,data);
  }

  deleteinspectionType(id:number){
    return this.httpclient.delete(this.url+`/tipoinspeccion/${id}`);
  }
}
