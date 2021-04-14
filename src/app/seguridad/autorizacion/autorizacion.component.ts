import { Component, Input, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.css']
})
export class AutorizacionComponent implements OnInit {

  @Input()
  rol: string;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void { }

  estaAutorizado(): boolean {
    if (this.rol) {
      return this.seguridadService.obtenerRol() === this.rol;

    } else {
      return this.seguridadService.haAutenticado();
    }
  }

}