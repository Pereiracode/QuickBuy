import { Component } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "mateus@gmail.com" && this.usuario.senha == "abc123") {
      this.usuarioAutenticado = true;
    }
  }
}
