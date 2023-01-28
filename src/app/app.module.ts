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



import { AppComponent } from './app.component';
import { InspeccionComponent } from './Components/inspeccion/inspeccion.component';
import { ShowInspeccionComponent } from './Components/show-inspeccion/show-inspeccion.component';
import { AddEditInspeccionComponent } from './Components/add-edit-inspeccion/add-edit-inspeccion.component';

import { InspeccionService } from './service/inspeccion.service';
import { MenuComponent } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiposComponent } from './Components/tipos/tipos.component';
import { DetalleComponent } from './Components/inspeccion/detalle/detalle.component';
import { DetallesComponent } from './Components/detalles/detalles.component';
import { AddTiposComponent } from './Components/add-tipos/add-tipos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClientsComponent } from './Components/clients/clients.component';
import { AddClientComponent } from './Components/add-client/add-client.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AddContactComponent } from './Components/add-contact/add-contact.component';
import { ReceivedContactComponent } from './Components/received-contact/received-contact.component';

const routes :Routes = [
  {path:'', redirectTo: 'Inspeccion', pathMatch: 'full'},
  {path:'Clientes',component:ClientsComponent},
  {path:'AgregarClientes', component : AddClientComponent},
  {path:'Contactos',component:ContactsComponent},
  {path:'AgregarContactos', component : AddContactComponent},
  {path:'Recibido', component:ReceivedContactComponent},
  
  {path:'Detalles', component : DetallesComponent},
  {path:'AgregarTipos', component : AddTiposComponent},
  {path:'editarTipo/:id', component : AddTiposComponent},
  {path:'getInspection/:id', component: DetalleComponent},
  {path:'**', redirectTo: 'Inspeccion', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    InspeccionComponent,
    ShowInspeccionComponent,
    AddEditInspeccionComponent,
    MenuComponent,
    TiposComponent,
    DetallesComponent,
    DetalleComponent,
    AddTiposComponent,
    ClientsComponent,
    AddClientComponent,
    ContactsComponent,
   AddContactComponent,
   ReceivedContactComponent
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
    MatSelectModule
  ],
  providers: [InspeccionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
