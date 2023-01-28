import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClientsComponent } from './Components/clients/clients.component';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { ReceivedContactComponent } from './Components/received-contact/received-contact.component';
import { BeginwithComponent } from './Components/beginwith/beginwith.component';
import { ClienteMasDeUncontacto } from './Models/cliente-mas-de-uncontacto';
import { ClientesConMasdeunContactoComponent } from './Components/clientes-con-masdeun-contacto/clientes-con-masdeun-contacto.component';

const routes :Routes = [
  {path:'', redirectTo: 'Inspeccion', pathMatch: 'full'},
  {path:'Clientes',component:ClientsComponent},
  {path:'AgregarClientes', component : AddClientComponent},
  {path:'Contactos',component:ContactsComponent},
  {path:'AgregarContactos', component : AddContactComponent},
  {path:'editarCliente/:id', component : AddClientComponent},
  {path:'Recibido', component:ReceivedContactComponent}, 
  {path:'EmpiecePor',component:BeginwithComponent}, 
  {path:'MasDeUno',component:ClientesConMasdeunContactoComponent}, 
  {path:'**', redirectTo: 'Inspeccion', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientsComponent,
    AddClientComponent,
    ContactsComponent,
   AddContactComponent,
   ReceivedContactComponent,
   BeginwithComponent,
   ClientesConMasdeunContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
