import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementoSelectorMultiple } from 'src/app/utilidades/selector-multiple/selector-multiple';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  formulario: FormGroup;

  generosNoSeleccionados: ElementoSelectorMultiple[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Acción' },
    { llave: 3, valor: 'Comedia' }
  ];

  generosSeleccionados: ElementoSelectorMultiple[] = [];

  cinesNoSeleccionados: ElementoSelectorMultiple[] = [
    { llave: 1, valor: 'Yelmo Premium Lagoh' },
    { llave: 2, valor: 'Cinesur Nervión' },
    { llave: 3, valor: 'CineZona' }
  ];

  cinesSeleccionados: ElementoSelectorMultiple[] = [];

  @Input()
  modelo: PeliculaDTO;

  @Output()
  envio: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.required],
      poster: '',
      sinopsis: '',
      trailer: '',
      fechaLanzamiento: '',
      enCartelera: false,
      idsGeneros: '',
      idsCines: ''
    });

    if (this.modelo !== undefined) {
      this.formulario.patchValue(this.modelo);
    }
  }

  obtenerArchivoSeleccionado(archivo: File) {
    this.formulario.get('poster').setValue(archivo);
  }

  obtenerTextoIntroducido(texto: string) {
    this.formulario.get('sinopsis').setValue(texto);
  }

  guardar() {
    console.log(this.generosSeleccionados);
    this.formulario.get('idsGeneros').setValue(this.generosSeleccionados.map(valor => valor.llave));
    this.formulario.get('idsCines').setValue(this.cinesSeleccionados.map(valor => valor.llave));
    this.envio.emit(this.formulario.value);
  }

}
