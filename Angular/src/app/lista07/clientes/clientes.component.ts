import { Component } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})
export class ClientesComponent {
  clientes: any = [];
  constructor(private serv: ClienteServiceService) {
    this.serv.getClientes().then((data) => {
      console.log(data);
      this.clientes = data;
    });
    this.serv.getCliente(3).then((data) => {
      console.log(data);
      this.clientes = data;
    });
    let cliente: any = {
      nome: 'Marcelo',
      rg: '511564654',
      cpf: '12389444',
      email: 'marcelo@hotmail.com',
      telefone: '65156151489',
      celular: '546546546',
      cep: '75641233',
      endereco: 'rua das flores',
      numero: '56465',
      complemento: '84',
      bairro: 'jardim garcia',
      cidade: 'campinas',
      estado: 'SP'
    };
    this.serv.setCliente(cliente).then((data) => {
      console.log(data);
      this.clientes = data;
    })
  }
}
