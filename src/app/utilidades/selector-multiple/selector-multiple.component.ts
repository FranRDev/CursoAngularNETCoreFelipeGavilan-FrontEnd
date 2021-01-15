import { Component, Input, Output } from '@angular/core';
import { ElementoSelectorMultiple } from './selector-multiple';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent {

  @Input()
  elementosSeleccionados: ElementoSelectorMultiple[] = [];

  @Input()
  elementosNoSeleccionados: ElementoSelectorMultiple[] = [];

  constructor() { }

  elementoSeleccionado(elemento: ElementoSelectorMultiple, indice: number) {
    this.elementosSeleccionados.push(elemento);
    this.elementosNoSeleccionados.splice(indice, 1);
  }

  elementoDeseleccionado(elemento: ElementoSelectorMultiple, indice: number) {
    this.elementosNoSeleccionados.push(elemento);
    this.elementosSeleccionados.splice(indice, 1);
  }

  seleccionarTodo() {
    this.elementosSeleccionados.push(...this.elementosNoSeleccionados);
    this.elementosNoSeleccionados = [];
  }

  deseleccionarTodo() {
    this.elementosNoSeleccionados.push(...this.elementosSeleccionados);
    this.elementosSeleccionados = [];
  }

}
