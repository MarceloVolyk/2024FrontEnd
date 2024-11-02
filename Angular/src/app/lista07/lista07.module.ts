import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { lista07RoutingModule } from './lista07-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
  ],
  imports: [
    CommonModule,
    lista07RoutingModule,
    FormsModule
  ],
  exports: [
    ClientesComponent,
  ]
})
export class Lista07Module { }