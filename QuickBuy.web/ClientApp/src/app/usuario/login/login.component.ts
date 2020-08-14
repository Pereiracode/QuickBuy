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
  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"];

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "mateus@gmail.com" && this.usuario.senha == "abc123") {
      this.usuarioAutenticado = true;
    }
  }
}
