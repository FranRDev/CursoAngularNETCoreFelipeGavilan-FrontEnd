import { Component, EventEmitter, Input, Output } from '@angular/core';
import { archivoABase64 } from '../utilidades';

@Component({
  selector: 'app-selector-imagen',
  templateUrl: './selector-imagen.component.html',
  styleUrls: ['./selector-imagen.component.css']
})
export class SelectorImagenComponent {

  imagenBase64: string;

  @Input()
  urlImagenActual: string;

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  constructor() { }

  obtenerArchivoSeleccionado(evento: any) {
    if (evento.target.files.length > 0) {
      const archivo: File = evento.target.files[0];
      archivoABase64(archivo).then((cadena: string) => this.imagenBase64 = cadena).catch(error => console.log(error));
      this.archivoSeleccionado.emit(archivo);
      this.urlImagenActual = null;
    }
  }

}
