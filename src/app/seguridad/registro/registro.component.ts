import { Component, OnInit } from '@angular/core';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { CredencialesUsuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  errores: string[] = [];

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void { }

  registrar(credenciales: CredencialesUsuarioDTO) {
    this.seguridadService.registrar(credenciales)
      .subscribe(
        respuesta => console.log(respuesta),
        error => this.errores = parsearErroresApi(error)
      );
  }

}