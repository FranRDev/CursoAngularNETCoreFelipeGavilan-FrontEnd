import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { CredencialesUsuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  errores: string[] = [];

  constructor(private seguridadService: SeguridadService, private router: Router) { }

  ngOnInit(): void { }

  iniciarSesion(credenciales: CredencialesUsuarioDTO) {
    this.seguridadService.iniciarSesion(credenciales)
      .subscribe(
        respuesta => {
          this.seguridadService.guardarToken(respuesta);
          this.router.navigate(['/']);
        },
        error => this.errores = parsearErroresApi(error)
      );
  }

}