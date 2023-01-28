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
recargarPagina():void{
  location.reload();
}
    
    obternerCliente(id:number){
    this.clientservice.getClientbyId(id).subscribe(data=>{
    this.forms.patchValue({
      cliIdentificacion: data.cliIdentificacion,
      cliNombreCompleto: data.cliNombreCompleto,
      cliDireccion: data.cliDireccion,
      cliTelefono: data.cliTelefono,
      cliContactoId: data.cliContactoId,
      cliFechaCreacion:data.cliFechaCreacion,      
    }
    )
    })
    }
    
    agregarEditarCliente(){
    const clients: Clients = {
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
    }
    else{
      this.agregarCliente(clients);     
      this.router.navigate(['/Clientes']);
    }
    }
    agregarCliente(clients:Clients){
    this.clientservice.addClient(clients).subscribe(data=>{
      console.log(data);
      alert('Cliente agregado exitosamente!');
      this.router.navigate(['/Clientes']);
      this.clientservice.getAllClients();
    })
    }
    
    editarCliente(id:number, clients: Clients){
      this.clientservice.updateClient(id,clients).subscribe(data=>{
        this.router.navigate(['/Clientes']);  
      })
    }

    getAllContacts(){
      return this.contactService.getAllContacts().subscribe(data=>{
      console.log(data);
      });
    }
}
