import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreacionDTO, ActorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  formulario: FormGroup;

  @Input()
  modelo: ActorDTO;

  @Output()
  envio: EventEmitter<ActorCreacionDTO> = new EventEmitter<ActorCreacionDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required]}],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if (this.modelo !== undefined) {
      this.formulario.patchValue(this.modelo);
    }
  }

  obtenerArchivoSeleccionado(archivo: File) {
    this.formulario.get('foto').setValue(archivo);
  }

  obtenerTextoIntroducido(texto: string) {
    this.formulario.get('biografia').setValue(texto);
  }

  guardar() {
    this.envio.emit(this.formulario.value);
  }

}