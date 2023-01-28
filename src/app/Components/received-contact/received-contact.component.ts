import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { Contacts } from 'src/app/Models/contacts';
import { ContactsService } from 'src/app/service/contacts.service';

const contacts: Contacts[]=[]

@Component({
  selector: 'app-received-contact',
  templateUrl: './received-contact.component.html',
  styleUrls: ['./received-contact.component.css']
})
export class ReceivedContactComponent {
  displayedColumns: string[] = ['conId', 'conIdentificacion','conNombreCompleto'];
  
  contacto$! :Observable<Contacts>;

  dataSource = new MatTableDataSource<Contacts>(contacts);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private contactService: ContactsService){}

  getAllContacts(){
    this.contactService.getAllContacts().subscribe(data =>{
      console.log(data);
      this.dataSource.data = data;
    });
  }
  ngOnInit(){
  //this.getSpecificContacts();
  this.contacto$ = this.contactService.getSpecificContact();
   }

   recargar(){
    window.location.reload();
   }
  eliminarContacts(id:number){
    return this.contactService.deleteContact(id).subscribe(data=>{
     /*this.toast.success('Registro eliminado satisfactoriamente!');*/
     alert('Registro ' + id + ' eliminado con exito')
    this.getAllContacts();
    })
  }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}
