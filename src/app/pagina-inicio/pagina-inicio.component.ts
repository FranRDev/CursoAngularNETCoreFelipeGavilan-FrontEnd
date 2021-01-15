import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  peliculasCartelera;
  peliculasProximosEstrenos;

  constructor() { }

  ngOnInit(): void {
    this.peliculasCartelera = [
      {
        titulo: 'Spider-Man (2002)',
        fechaLanzamiento: new Date(),
        precio: 9.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Spider-Man 2 (2004)',
        fechaLanzamiento: new Date(),
        precio: 9.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR6,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Spider-Man 3 (2007)',
        fechaLanzamiento: new Date(),
        precio: 7.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'The Amazing Spider-Man (2012)',
        fechaLanzamiento: new Date(),
        precio: 10.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'The Amazing Spider-Man 2: El poder de Electro (2014)',
        fechaLanzamiento: new Date(),
        precio: 8.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Spider-Man: Homecoming (2017)',
        fechaLanzamiento: new Date(),
        precio: 14.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Spider-Man: un nuevo universo (2018)',
        fechaLanzamiento: new Date(),
        precio: 14.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        titulo: 'Spider-Man: Lejos de casa (2019)',
        fechaLanzamiento: new Date(),
        precio: 19.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }
    ]
  
    this.peliculasProximosEstrenos = [
      {
        titulo: 'Untitled Spider-Man Sequel (2021)',
        fechaLanzamiento: new Date(),
        precio: 29.99,
        poster: 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB468515592_.png'
      },
      {
        titulo: 'Spider-Man: Into the Spider-Verse 2 (2022)',
        fechaLanzamiento: new Date(),
        precio: 24.99,
        poster: 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/180x268/film-173410679._CB468515592_.png'
      }
    ]
  }

  valorado(valoracion: number): void {
    alert(valoracion);
  }

}
