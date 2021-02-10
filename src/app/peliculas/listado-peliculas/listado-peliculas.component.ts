import { Component, Input, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input()
  peliculas: PeliculaDTO[];

  constructor() { }

  ngOnInit(): void { }

  remover(inidice: number): void {
    this.peliculas.splice(inidice, 1);
  }

}
