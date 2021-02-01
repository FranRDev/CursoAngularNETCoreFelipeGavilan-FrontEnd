import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenadas } from 'src/app/utilidades/mapa/coordenadas';
import { CineCreacionDTO, CineDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  formulario: FormGroup;

  coordenadasInicial: Coordenadas[] = [];

  @Input()
  errores: string[] = [];

  @Input()
  modelo: CineDTO;

  @Output()
  envio: EventEmitter<CineCreacionDTO> = new EventEmitter<CineCreacionDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required]
    });

    if (this.modelo !== undefined) {
      this.formulario.patchValue(this.modelo);
      this.coordenadasInicial.push({ latitud: this.modelo.latitud, longitud: this.modelo.longitud });
    }
  }

  obtenerCoordenadasSeleccionada(coordenadas: Coordenadas) {
    this.formulario.patchValue(coordenadas);
  }

  guardar() {
    this.envio.emit(this.formulario.value);
  }

}
