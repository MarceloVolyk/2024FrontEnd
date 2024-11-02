import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  varGlobal: string = 'valor global';
  link: string = 'http://localhost:3000/clientes';

  constructor() { }
  // a. getClientes(): mostra todos os clientes do banco de dados
  getClientes() {
    return fetch(this.link).then(res => res.json());
  }

  // b. getCliente(id): retorna o cliente do Id passado para o banco de dados
  getCliente(id: number) {
    return fetch(`${this.link}/${id}`).then(res => res.json());
  }

  // c. setCliente(cliente): recebe um cliente e grava no banco de dados
  setCliente(cliente: any){
    return fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    }).then(res => res.json());
  }

  // d. atualizaCliente(cliente): atualiza o cliente passado
  atualizaCliente(cliente: any) {
    return fetch(this.link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    }).then(res => res.json());
  }

  // e. excluiCliente(id): exclui o cliente cujo id foi passado
  excluiCliente(id: number) {
    return fetch(this.link, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    }).then(res => res.json());
  }}
