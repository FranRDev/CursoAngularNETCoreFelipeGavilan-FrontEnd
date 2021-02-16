import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorPeliculaDTO } from 'src/app/actores/actor';
import { ElementoSelectorMultiple } from 'src/app/utilidades/selector-multiple/selector-multiple';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  imagenCambiada = false;

  @Input()
  cinesSeleccionados: ElementoSelectorMultiple[] = [];

  formulario: FormGroup;

  @Input()
  generosSeleccionados: ElementoSelectorMultiple[] = [];

  @Input()
  actoresSeleccionados: ActorPeliculaDTO[] = [];

  @Input()
  cinesNoSeleccionados: ElementoSelectorMultiple[];

  @Input()
  errores: string[] = [];

  @Input()
  generosNoSeleccionados: ElementoSelectorMultiple[];

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
      cartelera: false,
      idsGeneros: '',
      idsCines: '',
      actores: ''
    });

    if (this.modelo !== undefined) {
      this.formulario.patchValue(this.modelo);
    }
  }

  obtenerArchivoSeleccionado(archivo: File) {
    this.formulario.get('poster').setValue(archivo);
    this.imagenCambiada = true;
  }

  obtenerTextoIntroducido(texto: string) {
    this.formulario.get('sinopsis').setValue(texto);
  }

  guardar() {
    this.formulario.get('idsGeneros').setValue(this.generosSeleccionados.map(valor => valor.llave));
    this.formulario.get('idsCines').setValue(this.cinesSeleccionados.map(valor => valor.llave));
    this.formulario.get('actores').setValue(this.actoresSeleccionados.map(actor => { return { id: actor.id, personaje: actor.personaje } }));
    if (!this.imagenCambiada) { this.formulario.patchValue({ 'poster': null }); }
    this.envio.emit(this.formulario.value);
  }

}
