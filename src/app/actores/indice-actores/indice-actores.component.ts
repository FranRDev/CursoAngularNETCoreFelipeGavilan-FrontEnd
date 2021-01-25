import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActorDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-indice-actores',
  templateUrl: './indice-actores.component.html',
  styleUrls: ['./indice-actores.component.css']
})
export class IndiceActoresComponent implements OnInit {

  actores: ActorDTO[];

  columnasAMostrar = ['id', 'nombre', 'acciones'];

  pagina = 1;

  registros = 10;

  totalRegistros: string;

  constructor(private actoresServices: ActoresService) { }

  ngOnInit(): void {
    this.cargarPagina(this.pagina, this.registros);
  }

  borrarGenero(id: number) {
    this.actoresServices.borrar(id).subscribe(
      () => this.cargarPagina(this.pagina, this.registros),
      error => console.error(error)
    );
  }

  cambiarPagina(datos: PageEvent) {
    this.pagina = datos.pageIndex + 1;
    this.registros = datos.pageSize;
    this.cargarPagina(this.pagina, this.registros);
  }

  cargarPagina(pagina: number, registros: number) {
    this.actoresServices.obtenerTodos(pagina, registros).subscribe(
      (respuesta: HttpResponse<ActorDTO[]>) => {
        this.actores = respuesta.body;
        this.totalRegistros = respuesta.headers.get('Total-Registros');
      },
      error => console.error(error));
  }
}
