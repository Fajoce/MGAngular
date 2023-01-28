import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contacts } from '../Models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  readonly url = 'https://localhost:44318/api';
  constructor(private httpclient: HttpClient) { }
  //get All Contacts

  getAllContacts():Observable<any>{
    return this.httpclient.get<any>(this.url+'/contactos');
  }

   //get Contacts to create Client

   getSpecificContact():Observable<any>{
    return this.httpclient.get<any>(this.url+'/contactos/contacto');
  }

  //get Contacts by Id

  getContactbyId(id:number):Observable<Contacts>{
    return this.httpclient.get<Contacts>(this.url+'/contactos'+id);
  }

  //Add Contact
  addClient(data:any){
    return this.httpclient.post(this.url+'/contactos/',data);
  }

  updateContact(id:number,data:any){
    return this.httpclient.put(this.url + '/contactos/',id,data);
  }

  deleteContact(id:number){
    return this.httpclient.delete(this.url+`/contactos/${id}`);
  }
}
