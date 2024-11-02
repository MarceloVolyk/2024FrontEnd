import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./clientes/clientes.component";

const routes: Routes = [
    {path: '', redirectTo: 'clientes', pathMatch: 'full'},
    {path: 'clientes', component: ClientesComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class lista07RoutingModule { }
  