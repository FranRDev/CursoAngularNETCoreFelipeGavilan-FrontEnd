import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GeneroDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  columnasAMostrar = ['id', 'nombre', 'acciones'];

  generos: GeneroDTO[];

  pagina = 1;

  registros = 10;

  totalRegistros: string;

  constructor(private generosService: GenerosService) { }

  ngOnInit(): void {
    this.cargarPagina(this.pagina, this.registros);
  }

  cambiarPagina(datos: PageEvent) {
    this.pagina = datos.pageIndex + 1;
    this.registros = datos.pageSize;
    this.cargarPagina(this.pagina, this.registros);
  }

  cargarPagina(pagina: number, registros: number) {
    this.generosService.obtenerTodos(pagina, registros).subscribe(
      (respuesta: HttpResponse<GeneroDTO[]>) => {
        this.generos = respuesta.body;
        this.totalRegistros = respuesta.headers.get('Total-Registros');
      },
      error => console.error(error));
  }

}
