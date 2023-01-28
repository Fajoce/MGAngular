import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contacts } from 'src/app/Models/contacts';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  forms!: FormGroup
  id!:number;
  titulo:string = 'Agregar Contactos';

  contactList$!: Observable<any>
  clientsList$!: Observable<any>

  constructor(private fg: FormBuilder, private contactservice:
    ContactsService,private contactService: ContactsService,
    private activeRoute: ActivatedRoute,
    private router: Router){this.forms = this.fg.group({
      conIdentificacion: ['', Validators.required],
      conNombreCompleto : ['', Validators.required],
      conDireccion:['', Validators.required],
      conTelefono:['', Validators.required],
      conFechaCreacion:['', Validators.required]
    });
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));}

    ngOnInit(){
      if(this.id != 0){
        this.titulo = 'Actualizar Contacto';
        
      }
      this.contactList$ = this.contactService.getAllContacts();
    }
    
    obternerContacto(id:number){
    this.contactservice.getContactbyId(id).subscribe(data=>{
    this.forms.patchValue({
      conIdentificacion: data.conIdentificacion,
      conNombreCompleto: data.conNombreCompleto,
      conDireccion: data.conDireccion,
      conTelefono: data.conTelefono,
      conFechaCreacion:data.conFechaCreacion,      
    }
    )
    })
    }
    
    agregarEditarContacto(){
    const contacts: Contacts = {
      conIdentificacion : this.forms.value.conIdentificacion,
      conNombreCompleto : this.forms.value.conNombreCompleto,
      conDireccion: this.forms.value.conDireccion,
      conTelefono: this.forms.value.conTelefono,
      conFechaCreacion:this.forms.value.cpnFechaCreacion
    }
    if(this.id != 0){
      contacts.conId = this.id,
    this.editarContacto(this.id,contacts)
    }
    else{
      this.agregarContacto(contacts);
      alert('Contacto agregado exitosamente!');
      this.router.navigate(['/Contactos']);
    }
    }
    agregarContacto(contacts:Contacts){
    this.contactService.addClient(contacts).subscribe(data=>{
      console.log(data);
      alert('Contacto agregado exitosamente!');
      this.router.navigate(['/Contactoss']);
      this.contactservice.getAllContacts();
    })
    }
    
    editarContacto(id:number, contacts: Contacts){
      this.contactService.updateContact(id,contacts).subscribe(data=>{
        this.router.navigate(['/Contactos']);  
      })
    }
}
