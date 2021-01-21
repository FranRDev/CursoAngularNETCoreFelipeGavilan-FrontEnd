import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { GeneroCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: GeneroCreacionDTO;
  
  @Output()
  envio: EventEmitter<GeneroCreacionDTO> = new EventEmitter<GeneroCreacionDTO>();

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]}]
    });

    if (this.modelo !== undefined) {
      this.formulario.patchValue(this.modelo);
    }
  }

  obtenerError() {
    var nombre = this.formulario.get('nombre');

    if (nombre.hasError('required')) {
      return 'Introduzca el nombre';
    }

    if (nombre.hasError('minlength')) {
      return 'Introduzca al menos 3 caracteres';
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  guardar() {
    this.envio.emit(this.formulario.value);
  }

}