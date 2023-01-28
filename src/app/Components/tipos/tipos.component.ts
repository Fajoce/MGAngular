import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Tipos } from 'src/app/Models/tipos';
import { InspectionTypeService } from 'src/app/service/inspection-type.service';
import { ToastrService } from 'ngx-toastr';

const tipos: Tipos[] = [];

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent {
  displayedColumns: string[] = ['id', 'nombre','responsable','acciones'];
  dataSource = new MatTableDataSource<Tipos>(tipos);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

constructor(private inspectiontypeservice: InspectionTypeService
 ){

}

getTipos(){
  this.inspectiontypeservice.getInspectionType().subscribe(res =>{
    console.log(res);
    this.dataSource.data = res;
  });
}
ngOnInit(){
this.getTipos();
}
eliminarTipos(id:number){
  return this.inspectiontypeservice.deleteinspectionType(id).subscribe(data=>{
   /*this.toast.success('Registro eliminado satisfactoriamente!');*/
   alert('Registro ' + id + ' eliminado con exito')
  this.getTipos();
  })
}
editarTipos(id:number){

}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
