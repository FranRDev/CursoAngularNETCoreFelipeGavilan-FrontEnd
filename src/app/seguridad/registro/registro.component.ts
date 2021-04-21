import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private seguridadService: SeguridadService, private router: Router) { }

  ngOnInit(): void { }

  registrar(credenciales: CredencialesUsuarioDTO) {
    this.seguridadService.registrar(credenciales)
      .subscribe(
        respuesta => {
          this.seguridadService.guardarToken(respuesta);
          this.router.navigate(['/']);
        },
        error => this.errores = parsearErroresApi(error)
      );
  }

}