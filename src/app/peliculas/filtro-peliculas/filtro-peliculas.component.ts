import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { GeneroDTO } from 'src/app/generos/genero';
import { GenerosService } from 'src/app/generos/generos.service';
import { PeliculaDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  formulario: FormGroup;

  formularioOriginal = { titulo: '', idGenero: 0, enCartelera: false, proximosEstrenos: false };

  generos: GeneroDTO[] = [];

  pagina = 1;

  peliculas: PeliculaDTO[];

  registros = 10;

  totalRegistros;

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute, private generosService: GenerosService,
    private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.generosService.obtenerTodos().subscribe(
      generos => {
        this.generos = generos;

        this.formulario = this.formBuilder.group(this.formularioOriginal);
        this.leerParametrosUrl();
        this.buscarPeliculas(this.formulario.value);

        this.formulario.valueChanges.subscribe(valores => {
          this.buscarPeliculas(valores);
          this.escribirParametrosBusquedaEnUrl();
        });
      }
    );
  }

  buscarPeliculas(valores: any) {
    valores.pagina = this.pagina;
    valores.registros = this.registros;

    this.peliculasService.filtrar(valores).subscribe(
      respuesta => {
        this.peliculas = respuesta.body;
        this.escribirParametrosBusquedaEnUrl();
        this.totalRegistros = respuesta.headers.get('Total-Registros');
      }
    );
  }

  cambiarPagina(datos: PageEvent) {
    this.pagina = datos.pageIndex + 1;
    this.registros = datos.pageSize;
    this.buscarPeliculas(this.formulario.value);
  }

  private escribirParametrosBusquedaEnUrl() {
    var cadenasParametros = [];
    var parametros = this.formulario.value;

    if (parametros.titulo) { cadenasParametros.push(`titulo=${parametros.titulo}`); }
    if (parametros.idGenero != '0') { cadenasParametros.push(`idGenero=${parametros.idGenero}`); }
    if (parametros.proximosEstrenos) { cadenasParametros.push(`proximosEstrenos=${parametros.proximosEstrenos}`); }
    if (parametros.enCartelera) { cadenasParametros.push(`enCartelera=${parametros.enCartelera}`); }

    this.location.replaceState('peliculas/buscar', cadenasParametros.join('&'));
  }

  private leerParametrosUrl() {
    this.activatedRoute.queryParams.subscribe(parametros => {
      var formulario: any = {};

      if (parametros.titulo) { formulario.titulo = parametros.titulo; }
      if (parametros.idGenero) { formulario.idGenero = Number(parametros.idGenero); }
      if (parametros.proximosEstrenos) { formulario.proximosEstrenos = parametros.proximosEstrenos; }
      if (parametros.enCartelera) { formulario.enCartelera = parametros.enCartelera; }

      this.formulario.patchValue(formulario);
    });
  }

  limpiar() {
    this.formulario.patchValue(this.formularioOriginal);
  }

}