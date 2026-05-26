import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //declarar um atributo
  nome: string = "Maria";
  // Interpolação {{}} (Unidirecional= TS -> HTML)

  imgUrl: string = "https://wallpapers.com/images/high/batman-monster-car-neon-lights-mtawjvl2wqedbnw5.webp";
  //property binding [] (Unidirecional TS -> HTML)

  botaoStatus: boolean = false;
  //property binding [] 

  //Style e Class Binding =: alteração de Classe e Style via Data Binding
  classeAlerta: string = "alert-success";
}
