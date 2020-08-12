import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public email = "mateus@gmail.com";

  entrar() {
    alert ("Entrar no sistema");
  }
}
