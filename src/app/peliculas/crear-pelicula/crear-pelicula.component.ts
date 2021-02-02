import { Component, OnInit } from '@angular/core';
import { ElementoSelectorMultiple } from 'src/app/utilidades/selector-multiple/selector-multiple';
import { parsearErroresApi } from 'src/app/utilidades/utilidades';
import { PeliculaCreacionDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  cinesNoSeleccionados: ElementoSelectorMultiple[];
  errores: string[] = [];
  generosNoSeleccionados: ElementoSelectorMultiple[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.postGet()
      .subscribe(
        resultado => {
          this.cinesNoSeleccionados = resultado.cines.map(cine => { return <ElementoSelectorMultiple>{ llave: cine.id, valor: cine.nombre } });
          this.generosNoSeleccionados = resultado.generos.map(genero => { return <ElementoSelectorMultiple>{ llave: genero.id, valor: genero.nombre } });
        },
        error => console.error(error)
      );
  }

  guardar(pelicula: PeliculaCreacionDTO) {
    this.peliculasService.crear(pelicula)
      .subscribe(
        () => console.log('Se ha creado la película'),
        error => this.errores = parsearErroresApi(error)
      );
  }

}
