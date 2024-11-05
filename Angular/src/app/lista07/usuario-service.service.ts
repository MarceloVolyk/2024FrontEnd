import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // Usamos BehaviorSubject para que possamos obter o valor atual
  usuario : any;
  
  // Observable que os componentes podem se inscrever
  

  // Método para atualizar o usuário
  setUsuario(usuario: any): void {
    this.usuario = usuario;
  }

  getUsuario(): BehaviorSubject<any> {
    return this.usuario
  }

}
