import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora-bindingIO';
  resultadoPadre: number;

  onResultado(resultadoPadre: number): void{
    this.resultadoPadre = resultadoPadre;
  }
}
