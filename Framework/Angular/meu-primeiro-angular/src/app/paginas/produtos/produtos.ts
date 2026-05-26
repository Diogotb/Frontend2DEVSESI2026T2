import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  //atributos
  contador: number = 0;
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  //função sem parâmetro
  incrementar(){
    this.contador++; // soma +1 toda vez que a função for executada
  }

  //função com Parâmetro
  onKeyUp(event: any){
    this.valorAtual = event.target.value;
  }

  //Salvar
  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  //alternar
  alternarDestaque(){
    this.isMouseOver = !this.isMouseOver;//inverte valor booleana
  }
}
