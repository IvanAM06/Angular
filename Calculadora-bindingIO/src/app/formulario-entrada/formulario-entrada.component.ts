import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.component.html',
  styleUrls: ['./formulario-entrada.component.css']
})
export class FormularioEntradaComponent implements OnInit {

  digitoA: number;
  digitoB: number;
  @Output() resultadoGenerado = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onResultado(): void {
    let resultado = this.digitoA + this.digitoB;
    this.resultadoGenerado.emit(resultado);
  }
}
