import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  formulario: FormGroup;

  formularioOriginal = { titulo: '', idGenero: 0, enCartelera: false, proximosEstrenos: false };

  generos = [ { id: 1, nombre: 'Drama' }, { id: 2, nombre: 'Acción' }, { id: 3, nombre: 'Comedia' } ];

  peliculas = [
    {
      titulo: 'Spider-Man (2002)',
      enCartelera: false,
      proximoEstreno: false,
      generos: [ 1, 2 ],
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      titulo: 'Spider-Man: Into the Spider-Verse 2 (2022)',
      enCartelera: false,
      proximoEstreno: true,
      generos: [ 3 ],
      poster: 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB468515592_.png'
    },
    {
      titulo: 'Spider-Man: Lejos de casa (2019)',
      enCartelera: true,
      proximoEstreno: false,
      generos: [ 1, 2 ],
      poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  ];

  peliculasOriginales = this.peliculas;

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(this.formularioOriginal);
    this.leerParametrosUrl();
    this.buscarPeliculas(this.formulario.value);

    this.formulario.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginales;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnUrl();
    });
  }

  buscarPeliculas(valores: any) {
    if (valores.titulo) { this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1); }
    if (valores.idGenero !== 0) { this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.idGenero) !== -1); }
    if (valores.proximosEstrenos) { this.peliculas = this.peliculas.filter(pelicula => pelicula.proximoEstreno); }
    if (valores.enCartelera) { this.peliculas = this.peliculas.filter(pelicula => pelicula.enCartelera); }
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