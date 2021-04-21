import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import Swal from 'sweetalert2';

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

  constructor(private seguridadService: SeguridadService) { }

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
    if (this.seguridadService.haAutenticado()) {
      this.valoracion = this.seleccionado;
      this.valorado.emit(this.valoracion);

    } else {
      Swal.fire("Lo sentimos", "Tiene que inicar sesión para votar", "error");
    }
  }

}
