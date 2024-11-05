import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../cliente-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];
  clienteSelecionado: any = {}
  editando: boolean = false

  constructor(private serv: ClienteServiceService) { }

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes() {
    this.serv.getClientes().then((data: any[]) => {
      this.clientes = data;
    }).catch(error => {
      console.error('Erro ao carregar clientes:', error);
    });
  }

  salvarCliente() {
    if (this.editando) {
      // Atualiza o cliente existente
      this.serv.atualizaCliente(this.clienteSelecionado.id, this.clienteSelecionado).then(() => {
        this.carregarClientes();
        this.cancelarEdicao();
      }).catch(error => {
        console.error('Erro ao atualizar cliente:', error);
      });
    } else {
      // Adiciona um novo cliente
      this.serv.setCliente(this.clienteSelecionado).then(() => {
        this.carregarClientes();
        this.clienteSelecionado = {}; // Limpa o formulário após adicionar
      }).catch(error => {
        console.error('Erro ao adicionar cliente:', error);
      });
    }
  }

  editarCliente(cliente: any) {
    this.clienteSelecionado = { ...cliente }; // Copia o cliente para edição
    this.editando = true; // Muda para o modo de edição
  }

  excluirCliente(id: number) {
    this.serv.excluiCliente(id).then(() => {
      this.carregarClientes();
    }).catch(error => {
      console.error('Erro ao excluir cliente:', error);
    });
  }

  cancelarEdicao() {
    this.clienteSelecionado = {}; // Limpa o formulário
    this.editando = false; // Sai do modo de edição
  }
}
  


