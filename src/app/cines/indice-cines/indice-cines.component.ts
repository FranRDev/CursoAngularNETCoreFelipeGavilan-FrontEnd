import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CineDTO } from '../cine';
import { CinesService } from '../cines.service';

@Component({
  selector: 'app-indice-cines',
  templateUrl: './indice-cines.component.html',
  styleUrls: ['./indice-cines.component.css']
})
export class IndiceCinesComponent implements OnInit {

  cines: CineDTO[];

  columnasAMostrar = ['id', 'nombre', 'acciones'];

  pagina = 1;

  registros = 10;

  totalRegistros: string;

  constructor(private cinesService: CinesService) { }

  ngOnInit(): void {
    this.cargarPagina(this.pagina, this.registros);
  }

  borrarCine(id: number) {
    this.cinesService.borrar(id).subscribe(
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
    this.cinesService.obtenerTodos(pagina, registros).subscribe(
      (respuesta: HttpResponse<CineDTO[]>) => {
        this.cines = respuesta.body;
        this.totalRegistros = respuesta.headers.get('Total-Registros');
      },
      error => console.error(error));
  }

}
