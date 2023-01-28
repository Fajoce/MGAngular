import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Contacts } from 'src/app/Models/contacts';
import { ContactsService } from 'src/app/service/contacts.service';

const contacts: Contacts[] = []

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  displayedColumns: string[] = ['conId', 'conIdentificacion','conNombreCompleto', 'conDireccion','conTelefono','conFechaCreacion','acciones'];
  dataSource = new MatTableDataSource<Contacts>(contacts);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private contactService: ContactsService){}

  getContacts(){
    this.contactService.getAllContacts().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
  this.getContacts();
  }

  eliminarContacts(id:number){
    return this.contactService.deleteContact(id).subscribe(data=>{
     /*this.toast.success('Registro eliminado satisfactoriamente!');*/
     alert('Registro ' + id + ' eliminado con exito')
    this.getContacts();
    })
  }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}
