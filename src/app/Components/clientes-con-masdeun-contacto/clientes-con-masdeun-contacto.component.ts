import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClienteMasDeUncontacto } from 'src/app/Models/cliente-mas-de-uncontacto';
import { ClientsService } from 'src/app/service/clients.service';

const clients: ClienteMasDeUncontacto[] = []

@Component({
  selector: 'app-clientes-con-masdeun-contacto',
  templateUrl: './clientes-con-masdeun-contacto.component.html',
  styleUrls: ['./clientes-con-masdeun-contacto.component.css']
})
export class ClientesConMasdeunContactoComponent {
  displayedColumns: string[] = ['cliIdentificacion','cliNombreCompleto', 'count'];
  dataSource = new MatTableDataSource<ClienteMasDeUncontacto>(clients);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private clientService: ClientsService){}

  getClientWMTOC(){
    this.clientService.getAllClientsWithMoreThanOneContact().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
  this.getClientWMTOC();
  }


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
}
