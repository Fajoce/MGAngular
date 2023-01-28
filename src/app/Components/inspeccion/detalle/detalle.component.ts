import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InspectionTypeService } from 'src/app/service/inspection-type.service';
import { Tipos } from 'src/app/Models/tipos';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  id!:number;
  inspeccion!: Tipos;
  inspeccion$! :Observable<Tipos>;
constructor(private inspectiontypeservice: InspectionTypeService,
  private activatedRoute: ActivatedRoute){
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
}

ngOnInit(){
 //this.getInspectionById();
 this.inspeccion$ = this.inspectiontypeservice.getInspectionTypebyId(this.id);
}
getInspectionById(){
 /* return this.inspectiontypeservice.getInspectionTypebyId(this.id).subscribe(data=>{
    this.inspeccion = data;
  })*/
  }

}
