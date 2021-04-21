import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredencialesUsuarioDTO } from '../seguridad';

@Component({
  selector: 'app-formulario-autenticacion',
  templateUrl: './formulario-autenticacion.component.html',
  styleUrls: ['./formulario-autenticacion.component.css']
})
export class FormularioAutenticacionComponent implements OnInit {

  @Input()
  accion: string;

  @Input()
  errores: string[] = [];

  @Output()
  envio: EventEmitter<CredencialesUsuarioDTO> = new EventEmitter<CredencialesUsuarioDTO>();

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      correo: ['', { validadores: [Validators.required, Validators.email] }],
      clave: ['', { validadores: [Validators.required] }]
    });
  }

  obtenerMensajeErrorCorreo() {
    var correo = this.formulario.get('correo');

    if (correo.hasError('required')) { return 'El correo es obligatorio'};
    if (correo.hasError('email')) { return 'El correo no es válido'};

    return '';
  }

}