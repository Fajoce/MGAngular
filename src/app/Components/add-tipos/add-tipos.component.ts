import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InspeccionService } from 'src/app/service/inspeccion.service';
import { InspectionTypeService } from 'src/app/service/inspection-type.service';
import { Tipos } from 'src/app/Models/tipos';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-tipos',
  templateUrl: './add-tipos.component.html',
  styleUrls: ['./add-tipos.component.css']
})
export class AddTiposComponent {
forms!: FormGroup
id!:number;
titulo:string = 'Agregar Tipos de Inspeccion';

constructor(private fg: FormBuilder, private inspectionTypeService:
  InspectionTypeService,
  private activeRoute: ActivatedRoute,
  private router: Router){
this.forms = this.fg.group({
  nombre: ['', Validators.required],
  responsable : ['', Validators.required]
});
this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
}
ngOnInit(){
  if(this.id != 0){
    this.titulo = 'Actualizar Tipo de Inspección';
    this.obternerInspeccion(this.id);
  }
}
obternerInspeccion(id:number){
this.inspectionTypeService.getInspectionTypebyId(id).subscribe(data=>{
this.forms.patchValue({
  nombre: data.nombre,
  responsable: data.responsable
}
)
})
}

agregarEditarTipo(){
const tipos: Tipos = {
  nombre : this.forms.value.nombre,
  responsable : this.forms.value.responsable
}
if(this.id != 0){
  tipos.id = this.id,
this.editarTipo(this.id,tipos)
}
else{
  this.agregarTipo(tipos);
  //this.router.na;
}
}
agregarTipo(tipos:Tipos){
this.inspectionTypeService.addInspectionType(tipos).subscribe(data=>{
  console.log(data);
  this.router.navigate(['/Tipos']);
})
}

editarTipo(id:number, tipo: Tipos){
  this.inspectionTypeService.updateInspectionType(id,tipo).subscribe(data=>{
    this.router.navigate(['/Tipos']);  
  })
}
}


