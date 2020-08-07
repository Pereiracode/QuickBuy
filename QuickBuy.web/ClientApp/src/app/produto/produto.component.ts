import { Component } from "@angular/core";

@Component({
  selector: "produto", // nome da tag que irá representar o componente
  template: "<html><body>{{ obterNome() }}</body></html>"
})

export class ProdutoComponent {

  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsumg";
  }
}
