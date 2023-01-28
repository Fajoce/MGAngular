import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Clients } from 'src/app/Models/clients';
import { ClientsService } from 'src/app/service/clients.service';

const clients: Clients[] = [];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  displayedColumns: string[] = ['cliId', 'cliIdentificacion','cliNombreCompleto', 'cliDireccion','cliTelefono','cliNombreContacto','cliFechaCreacion','acciones'];
  dataSource = new MatTableDataSource<Clients>(clients);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private clientService: ClientsService){}

  getClients(){
    this.clientService.getAllClients().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
  this.getClients();
  }

  eliminarClientes(id:number){
    return this.clientService.deleteClient(id).subscribe(data=>{
     /*this.toast.success('Registro eliminado satisfactoriamente!');*/
     alert('Registro ' + id + ' eliminado con exito')
    this.getClients();
    })
  }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}
