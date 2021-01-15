import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {

  estrellas = [];
  @Input()
  maximo = 5;
  @Input()
  seleccionado = 0;
  valoracion = 0;
  @Output()
  valorado: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.estrellas = Array(this.maximo).fill(0);
  }

  ratonEncima(indice: number): void {
    this.seleccionado = indice + 1;
  }

  ratonFuera() {
    if (this.valoracion !== 0) {
      this.seleccionado = this.valoracion;

    } else {
      this.seleccionado = 0;
    }
  }

  valorar(indice: number): void {
    this.valoracion = this.seleccionado;
    this.valorado.emit(this.valoracion);
  }

}
