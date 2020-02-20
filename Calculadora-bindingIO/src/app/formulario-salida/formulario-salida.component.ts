import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-salida',
  templateUrl: './formulario-salida.component.html',
  styleUrls: ['./formulario-salida.component.css']
})
export class FormularioSalidaComponent implements OnInit {

  @Input() resultado: number;
  constructor() { }

  ngOnInit() {
  }
}
