import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../lista07/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  titulo = 'Tela de Login';
  usuario = 'edson.feitosa@facens.br';
  senha = '123456';
  erro: boolean = false;

  constructor(private router : Router, private service : UsuarioService) { }

  textoDigitado(texto: any)
  {
    console.log(texto);
  }
  entrar(){
    if (this.usuario == 'admin' && this.senha == 'admin') {
      this.router.navigate(['/principal']);
      this.service.setUsuario(this.usuario);
      
    } else {
      this.erro = true;
    }
  }
}
