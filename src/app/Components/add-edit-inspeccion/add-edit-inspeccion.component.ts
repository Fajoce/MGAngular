import { Component,Input } from '@angular/core';
import { InspeccionService } from 'src/app/service/inspeccion.service';
import { EstadoService } from 'src/app/service/estado.service';
import { InspectionTypeService } from 'src/app/service/inspection-type.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-edit-inspeccion',
  templateUrl: './add-edit-inspeccion.component.html',
  styleUrls: ['./add-edit-inspeccion.component.css']
})
export class AddEditInspeccionComponent {
inspectionList$! :Observable<any[]>;
statusList$! : Observable<any[]>
inspectiontypeList$! : Observable<any[]>

constructor(private inspectionservice:InspeccionService, 
  private statusservices:EstadoService,
  private inspectionTypeservice: InspectionTypeService ){
}

@Input() inspeccion:any;
id?:number = 0;
estado?:string = '';
comentarios?:string = '';
tipoInspeccionId?:number;

ngOnInit(){
  this.id = this.inspeccion.id;
  this.estado = this.inspeccion.estado;
  this.comentarios = this.inspeccion.comentarios;
  this.tipoInspeccionId = this.inspeccion.tipoInspeccionId;
  this.statusList$ = this.statusservices.getEstado();
  this.inspectionList$ = this.inspectionservice.getInspection ();
  this.inspectiontypeList$ = this.inspectionTypeservice.getInspectionType();
  console.log(this.id);
}

agregar(){
  var inspection = {
    estado: this.estado,
    comentarios: this.comentarios,
    tipoInspeccionId: this.tipoInspeccionId
  }
  this.inspectionservice.addInspection(inspection)
  .subscribe(res => {
    var closeModal = document.getElementById('add-edit-modal-close');
    if(closeModal){
      closeModal.click();
    }
    var showAddSuccess = document.getElementById('add-success-alert');
    if(showAddSuccess){
      showAddSuccess.style.display = 'block';
    }
    setTimeout(function(){
      if(showAddSuccess){
        showAddSuccess.style.display = 'none';
      }
    },4000)
  })
}

//
update(){
  var inspection = {
      id:this.id,
      estado: this.estado,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId
  }
  var a:any = this.id;
  this.inspectionservice.updateInspection(a,inspection)
  .subscribe(res => {
    var closeModal = document.getElementById('add-edit-modal-close');
    if(closeModal){
      closeModal.click();
    }
    var showUpdateSuccess = document.getElementById('update-success-alert');
    if(showUpdateSuccess){
      showUpdateSuccess.style.display = 'block';
    }
    setTimeout(function(){
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = 'none';
        location.reload();
      }
    },4000)
  })
}
}





