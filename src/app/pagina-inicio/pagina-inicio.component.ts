import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  peliculasCartelera: PeliculaDTO[];
  peliculasProximosEstrenos: PeliculaDTO[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.obtenerPaginaInicio().subscribe(
      paginaInicio => {
        this.peliculasCartelera = paginaInicio.enCartelera;
        this.peliculasProximosEstrenos = paginaInicio.proximosEstrenos;
      },
      error => console.error(error)
    );
  }

  valorado(valoracion: number): void {
    alert(valoracion);
  }

}
