import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Clients } from 'src/app/Models/clients';
import { ContactsService } from 'src/app/service/contacts.service';

const contacts: Clients[] = []

@Component({
  selector: 'app-beginwith',
  templateUrl: './beginwith.component.html',
  styleUrls: ['./beginwith.component.css']
})
export class BeginwithComponent {
  displayedColumns: string[] = ['conId', 'conIdentificacion','conNombreCompleto', 'conDireccion','conTelefono','conFechaCreacion', 'conNombre'];
  dataSource = new MatTableDataSource<Clients>(contacts);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private contactService: ContactsService){}

  getContactsBeginWith(){
    this.contactService.getAllContactsBeginWith().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
  this.getContactsBeginWith();
  }


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}
