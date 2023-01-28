import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { InspeccionService } from 'src/app/service/inspeccion.service';
import { InspectionTypeService } from 'src/app/service/inspection-type.service';

@Component({
  selector: 'app-show-inspeccion',
  templateUrl: './show-inspeccion.component.html',
  styleUrls: ['./show-inspeccion.component.css']
})

export class ShowInspeccionComponent {

  InspectionList$!: Observable<any[]>
  InspectionTypeList$!: Observable<any[]>
  InspectionTypeList:any=[];

  //Map data foreing key
InspectionTypeMap:Map<number,string> = new Map();

constructor(private inspectionService:InspeccionService, private inspectionTypeService: InspectionTypeService){
}
ngOnInit(){
  this.InspectionList$ = this.inspectionService.getInspection();
  this.InspectionTypeList$ = this.inspectionTypeService.getInspectionType();
  this.refreshInspectionTypeList();
}



//variable (ventana Modal)
title:string = '';
activateaddeditcomponnetinspection:boolean =false;
inspectiona:any;

modalAdd(){
  this.inspectiona ={
    id:0,
    estado:null,
    comentarios:null,
    tipoInspeccionId:null
  }
  this.title = 'Add Inspection';
  this.activateaddeditcomponnetinspection=true;
  
}
delete(item:any){
if(confirm(`Are you sure to delete this record?${item.id}`)){
this.inspectionService.deleteInspetion(item.id).subscribe(res=>{
  var closeModal = document.getElementById('add-edit-modal-close');
    if(closeModal){
      closeModal.click();
    }
    var showDeleteSuccess = document.getElementById('delete-success-alert');
    if(showDeleteSuccess){
      showDeleteSuccess.style.display = 'block';
    }
    setTimeout(function(){
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = 'none';
       location.reload();
      }
    },4000)
})
}
}

modalEdit(item:any){
this.inspectionService = item;
this.title = 'Edit Inspection';
this.activateaddeditcomponnetinspection = true
}

modalclose(){
  this.activateaddeditcomponnetinspection = false;
  this.InspectionList$ = this.inspectionService.getInspection();
}

refreshInspectionTypeList(){
  this.inspectionTypeService.getInspectionType().subscribe (data =>{
    this.InspectionTypeList = data;

    for(let i=0; i < data.length; i++){
      this.InspectionTypeMap.set(this.InspectionTypeList[i].id,
      this.InspectionTypeList[i].nombre  
        );
    }
  });
}
}
