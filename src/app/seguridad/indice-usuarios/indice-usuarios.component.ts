import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { UsuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.css']
})
export class IndiceUsuariosComponent implements OnInit {

  columnasAMostrar = ['correo', 'acciones'];

  usuarios: UsuarioDTO[];

  pagina = 1;

  registros = 10;

  totalRegistros: string;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.cargarPagina(this.pagina, this.registros);
  }

  anhadirAdmin(idUsuario: string) {
    this.seguridadService.anhadirAdmin(idUsuario)
    .subscribe(() => Swal.fire('Genial', 'El usuario ahora es Admin', 'success'));
  }

  cambiarPagina(datos: PageEvent) {
    this.pagina = datos.pageIndex + 1;
    this.registros = datos.pageSize;
    this.cargarPagina(this.pagina, this.registros);
  }

  cargarPagina(pagina: number, registros: number) {
    this.seguridadService.obtenerUsuarios(pagina, registros).subscribe(
      (respuesta: HttpResponse<UsuarioDTO[]>) => {
        this.usuarios = respuesta.body;
        this.totalRegistros = respuesta.headers.get('Total-Registros');
      },
      error => console.error(error));
  }

  quitarAdmin(idUsuario: string) {
    this.seguridadService.quitarAdmin(idUsuario)
    .subscribe(() => Swal.fire('Genial', 'El usuario ya no es Admin', 'success'));
  }

}