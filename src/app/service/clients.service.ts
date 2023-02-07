import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Clients } from '../Models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  readonly url = 'https://localhost:44318/api';
  constructor(private httpclient: HttpClient) { }
  //get All Clients

  getAllClients():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/clientes');
  }
    //get All Clients with more than one contact

    getAllClientsWithMoreThanOneContact():Observable<any[]>{
      return this.httpclient.get<any[]>(this.url+'/clientes/masdeuno');
    }

  //get Clients by Id

  getClientbyId(id:number):Observable<Clients>{
    return this.httpclient.get<Clients>(this.url+'/clientes/'+id);
  }

  //Add Client
  addClient(data:any){
    return this.httpclient.post(this.url+'/clientes/',data ,{ 
    responseType: 'text'});
  }

  updateClient(id:number,data:any){
    return this.httpclient.put(this.url + `/clientes/${id}`,data);
  }

  deleteClient(id:number){
    return this.httpclient.delete(this.url+`/clientes/${id}`);
  }
}
