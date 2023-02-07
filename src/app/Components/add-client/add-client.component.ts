import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Clients } from 'src/app/Models/clients';
import { Contacts } from 'src/app/Models/contacts';
import { ClientsService } from 'src/app/service/clients.service';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {
  forms!: FormGroup
  id!:number;
  titulo:string = 'Agregar Clientes';

  contactList$!: Observable<any>
  clientsList$!: Observable<any>

  constructor(private fg: FormBuilder, private clientservice:
    ClientsService,private contactService: ContactsService,
    private activeRoute: ActivatedRoute,
    private router: Router){this.forms = this.fg.group({
      cliId: ['', Validators.required],
      cliIdentificacion: ['', Validators.required],
      cliNombreCompleto : ['', Validators.required],
      cliDireccion:['', Validators.required],
      cliTelefono:['', Validators.required],
      cliContactoId:['',Validators.required],
      cliFechaCreacion:['', Validators.required]
    });
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));}

    ngOnInit(){
      if(this.id != 0){
        this.titulo = 'Actualizar Cliente';
        this.obternerCliente(this.id);    
      }
      this.contactList$ = this.contactService.getAllContacts();
      console.log(this.contactList$) 
    this.clientsList$= this.clientservice.getAllClients();  
    }
    
    obternerCliente(id:number){
    this.clientservice.getClientbyId(id).subscribe(data=>{
    this.forms.patchValue({
      cliId: data.cliId,
      cliIdentificacion: data.cliIdentificacion,
      cliNombreCompleto: data.cliNombreCompleto,
      cliDireccion: data.cliDireccion,
      cliTelefono: data.cliTelefono,
      cliContactoId: data.cliContactoId,
      cliFechaCreacion:data.cliFechaCreacion,      
    })
    })
    }
    
    agregarEditarCliente(){
    const clients: Clients = {
      cliId: this.forms.value.cliId,
      cliIdentificacion : this.forms.value.cliIdentificacion,
      cliNombreCompleto : this.forms.value.cliNombreCompleto,
      cliDireccion: this.forms.value.cliDireccion,
      cliTelefono: this.forms.value.cliTelefono,
      cliContactoId:this.forms.value.cliContactoId,
      cliFechaCreacion:this.forms.value.cliFechaCreacion
    }
    if(this.id != 0){
      clients.cliId = this.id,
    this.editarCliente(this.id,clients)
    alert('Cliente modificado exitosamente!');      
      this.clientservice.getAllClients();
    this.router.navigate(['/Clientes']);  
    }
    else{
      this.agregarCliente(clients);     
      alert('Cliente agregado exitosamente!');      
      this.clientservice.getAllClients();
      this.router.navigate(['/Clientes']);
    }
    }
    agregarCliente(clients:Clients){
    this.clientservice.addClient(clients).subscribe(res=>{
      console.log(res);
      if(res == 'Creado Con exito'){
        alert('Cliente agregado exitosamente!'); 
      }
      else{
        alert('Ya existe un contacto relacionado a este cliente!'); 
      }
    /*       
      this.clientservice.getAllClients();
      this.router.navigate(['/Clientes']);*/
    }).unsubscribe();
    }
   
    editarCliente(id:number, clients: Clients){
      debugger;
      this.clientservice.updateClient(id,clients).subscribe(data=>{
        console.log(data);
      })
    }

    getAllContacts(){
      return this.contactService.getAllContacts().subscribe(data=>{
      console.log(data);
      });
    }
}
